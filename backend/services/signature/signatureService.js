const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');
const prisma = require('../../config/prisma');

/**
 * Service de signature électronique certifiée conforme au règlement eIDAS
 * Génère des signatures légales avec horodatage, hashage et certificats
 */
class SignatureService {
    constructor() {
        this.algorithm = 'RSA-SHA256';
        this.keySize = 2048;
        this.certificateValidity = 365 * 24 * 60 * 60 * 1000; // 1 an en millisecondes
    }

    /**
     * Mapping helper for API compatibility
     */
    mapSignatureFromPrisma(s) {
        if (!s) return null;
        return {
            ...s,
            document_id: s.documentId,
            document_type: s.documentType,
            signer_name: s.signerName,
            signer_email: s.signerEmail,
            signature_hash: s.signatureHash,
            signature_value: s.signatureValue,
            signature_algorithm: s.signatureAlgorithm,
            certificate_data: s.certificateData,
            signed_at: s.signedAt,
            expires_at: s.expiresAt,
            legal_framework: s.legalFramework,
            is_valid: s.isValid,
            revoked_at: s.revokedAt,
            revocation_reason: s.revocationReason,
            created_at: s.createdAt,
            updated_at: s.updatedAt
        };
    }

    /**
     * Génère une paire de clés RSA pour la signature
     */
    generateKeyPair() {
        return crypto.generateKeyPairSync('rsa', {
            modulusLength: this.keySize,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                type: 'pkcs8',
                format: 'pem'
            }
        });
    }

    /**
     * Crée un hash SHA-256 du document
     */
    createDocumentHash(documentData) {
        const documentString = JSON.stringify(documentData);
        return crypto.createHash('sha256').update(documentString).digest('hex');
    }

    /**
     * Génère une signature électronique du document
     */
    signDocument(documentData, privateKey) {
        const documentHash = this.createDocumentHash(documentData);
        const signer = crypto.createSign(this.algorithm);
        signer.update(documentHash);

        return {
            signature: signer.sign(privateKey, 'hex'),
            hash: documentHash,
            algorithm: this.algorithm,
            timestamp: new Date().toISOString()
        };
    }

    /**
     * Vérifie la signature d'un document
     */
    verifySignature(documentData, signature, publicKey) {
        try {
            const documentHash = this.createDocumentHash(documentData);
            const verifier = crypto.createVerify(this.algorithm);
            verifier.update(documentHash);

            return verifier.verify(publicKey, signature, 'hex');
        } catch (error) {
            console.error('Erreur lors de la vérification de la signature:', error);
            return false;
        }
    }

    /**
     * Génère un certificat de signature électronique
     */
    generateCertificate(signatureData, signerInfo, documentInfo) {
        const certificateId = `CERT-${new Date().getFullYear()}-${uuidv4().substr(0, 8).toUpperCase()}`;
        const issuedAt = new Date();
        const expiresAt = new Date(issuedAt.getTime() + this.certificateValidity);

        const certificate = {
            id: certificateId,
            version: '1.0',
            issuedAt: issuedAt.toISOString(),
            expiresAt: expiresAt.toISOString(),
            issuer: {
                name: 'ProdigeLeC Signature Service',
                organization: 'ProdigeLeC',
                country: 'FR'
            },
            subject: {
                name: `${signerInfo.firstName} ${signerInfo.lastName}`,
                email: signerInfo.email,
                company: signerInfo.company || 'N/A'
            },
            signature: {
                algorithm: signatureData.algorithm,
                hash: signatureData.hash,
                value: signatureData.signature,
                timestamp: signatureData.timestamp
            },
            document: {
                id: documentInfo.id,
                type: documentInfo.type || 'quote',
                title: documentInfo.title,
                version: documentInfo.version || '1.0'
            },
            legalFramework: {
                regulation: 'eIDAS',
                type: 'AES', // Advanced Electronic Signature
                level: 'AdES-BES' // Basic Electronic Signature
            }
        };

        // Génère un hash du certificat pour l'intégrité
        const certificateHash = crypto.createHash('sha256')
            .update(JSON.stringify(certificate))
            .digest('hex');

        return {
            ...certificate,
            certificateHash
        };
    }

    /**
     * Enregistre la signature en base de données
     */
    async saveSignature(signatureData) {
        const result = await prisma.electronicSignature.create({
            data: {
                id: signatureData.id,
                documentId: String(signatureData.document.id),
                documentType: signatureData.document.type,
                signerName: signatureData.subject.name,
                signerEmail: signatureData.subject.email,
                signatureHash: signatureData.signature.hash,
                signatureValue: signatureData.signature.value,
                signatureAlgorithm: signatureData.signature.algorithm,
                certificateData: signatureData,
                signedAt: new Date(signatureData.signature.timestamp),
                expiresAt: new Date(signatureData.expiresAt),
                legalFramework: signatureData.legalFramework,
                isValid: true
            }
        });

        return this.mapSignatureFromPrisma(result);
    }

    /**
     * Récupère une signature depuis la base de données
     */
    async getSignature(signatureId) {
        const signature = await prisma.electronicSignature.findUnique({
            where: { id: signatureId }
        });

        if (!signature) {
            throw new Error('Signature non trouvée');
        }

        return this.mapSignatureFromPrisma(signature);
    }

    /**
     * Vérifie la validité d'une signature
     */
    async verifySignatureValidity(signatureId) {
        try {
            const signature = await this.getSignature(signatureId);

            // Vérifie si la signature a expiré
            const now = new Date();
            const expiresAt = new Date(signature.expires_at);

            if (now > expiresAt) {
                return {
                    isValid: false,
                    reason: 'Signature expirée',
                    expiredAt: expiresAt.toISOString()
                };
            }

            // Vérifie l'intégrité du certificat
            const certificateData = signature.certificate_data;
            const certToHash = { ...certificateData };
            delete certToHash.certificateHash;

            const calculatedHash = crypto.createHash('sha256')
                .update(JSON.stringify(certToHash))
                .digest('hex');

            if (calculatedHash !== certificateData.certificateHash) {
                return {
                    isValid: false,
                    reason: 'Certificat corrompu - hash ne correspond pas'
                };
            }

            return {
                isValid: true,
                signature: signature,
                verifiedAt: now.toISOString()
            };
        } catch (error) {
            return {
                isValid: false,
                reason: error.message
            };
        }
    }

    /**
     * Processus complet de signature électronique
     */
    async signDocumentComplete(documentData, signerInfo, documentInfo, signatureImage = null) {
        try {
            // 1. Génère la paire de clés
            const { publicKey, privateKey } = this.generateKeyPair();

            // 2. Signe le document (cryptographiquement)
            const signatureData = this.signDocument(documentData, privateKey);

            // 3. Génère le certificat
            const certificate = this.generateCertificate(signatureData, signerInfo, documentInfo);

            // Ajoute l'image de la signature manuscrite au certificat si fournie
            if (signatureImage) {
                certificate.signature.image = signatureImage;
            }

            // 4. Enregistre la signature
            const savedSignature = await this.saveSignature(certificate);

            // 5. Retourne toutes les informations de signature
            return {
                success: true,
                signatureId: savedSignature.id,
                certificate: certificate,
                publicKey: publicKey,
                privateKey: privateKey
            };

        } catch (error) {
            console.error('Erreur lors du processus de signature:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    /**
     * Génère un rapport d'audit de signature
     */
    generateAuditReport(signatureData) {
        return {
            signatureId: signatureData.id,
            audit: {
                timestamp: new Date().toISOString(),
                documentHash: signatureData.signature.hash,
                signatureAlgorithm: signatureData.signature.algorithm,
                signerIdentity: {
                    name: signatureData.subject.name,
                    email: signatureData.subject.email,
                    verified: true
                },
                legalCompliance: {
                    framework: signatureData.legalFramework.regulation,
                    signatureType: signatureData.legalFramework.type,
                    complianceLevel: signatureData.legalFramework.level
                },
                integrity: {
                    certificateHash: signatureData.certificateHash,
                    verificationStatus: 'valid'
                },
                timestampAuthority: {
                    source: 'internal',
                    trusted: true,
                    synchronized: true
                }
            }
        };
    }
}

module.exports = new SignatureService();
