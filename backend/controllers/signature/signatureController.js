const signatureService = require('../../services/signature/signatureService');
const signatureFlowService = require('../../services/signature/signatureFlowService');
const prisma = require('../../config/prisma');

/**
 * Contrôleur pour la gestion des signatures électroniques certifiées
 */
class SignatureController {
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
            updated_at: s.updatedAt,
            quote_number: s.quote ? s.quote.quoteNumber : undefined
        };
    }

    /**
     * Initie une demande de signature électronique par email
     */
    async requestSignature(req, res, next) {
        try {
            const { documentId, documentType } = req.body;
            const companyId = req.user.company_id;

            if (!documentId || !documentType) {
                return res.status(400).json({
                    success: false,
                    error: 'ID de document et type requis'
                });
            }

            const result = await signatureFlowService.initiateSignatureRequest(
                documentId,
                documentType,
                companyId
            );

            if (!result.success) {
                return res.status(500).json({
                    success: false,
                    error: result.error
                });
            }

            res.json(result);
        } catch (error) {
            console.error('Erreur lors de la demande de signature:', error);
            next(error);
        }
    }

    /**
     * Crée une nouvelle signature électronique
     */
    async createSignature(req, res, next) {
        try {
            const { documentId, documentType, signerInfo } = req.body;
            const companyId = req.user.company_id;

            // Validation des données
            if (!documentId || !documentType || !signerInfo) {
                return res.status(400).json({
                    success: false,
                    error: 'Données de signature incomplètes'
                });
            }

            if (documentType !== 'quote') {
                return res.status(400).json({
                    success: false,
                    error: 'Seuls les devis sont supportés pour le moment'
                });
            }

            // Récupère le document (devis) depuis la base de données via Prisma
            const document = await prisma.quote.findFirst({
                where: { id: documentId, companyId },
                include: { items: true }
            });

            if (!document) {
                return res.status(404).json({
                    success: false,
                    error: 'Document non trouvé'
                });
            }

            // Prépare les données du document pour la signature
            const documentData = {
                id: document.id,
                number: document.quoteNumber,
                total: document.totalTtc,
                customer: document.customerId,
                created_at: document.createdAt,
                items: document.items || []
            };

            const documentInfo = {
                id: document.id,
                type: documentType,
                title: `Devis ${document.quoteNumber}`,
                version: '1.0'
            };

            // Effectue la signature électronique
            const signatureResult = await signatureService.signDocumentComplete(
                documentData,
                signerInfo,
                documentInfo,
                req.body.signatureImage
            );

            if (!signatureResult.success) {
                return res.status(500).json({
                    success: false,
                    error: signatureResult.error
                });
            }

            // Met à jour le statut du document via Prisma
            await prisma.quote.update({
                where: { id: documentId },
                data: {
                    status: 'signed',
                    signedAt: new Date(),
                    signatureId: signatureResult.signatureId
                }
            });

            res.json({
                success: true,
                signatureId: signatureResult.signatureId,
                certificate: signatureResult.certificate,
                message: 'Signature électronique créée avec succès'
            });

        } catch (error) {
            console.error('Erreur lors de la création de la signature:', error);
            next(error);
        }
    }

    /**
     * Vérifie la validité d'une signature
     */
    async verifySignature(req, res, next) {
        try {
            const { signatureId } = req.params;

            if (!signatureId) {
                return res.status(400).json({
                    success: false,
                    error: 'ID de signature requis'
                });
            }

            const verificationResult = await signatureService.verifySignatureValidity(signatureId);

            res.json({
                success: true,
                verification: verificationResult
            });

        } catch (error) {
            console.error('Erreur lors de la vérification de la signature:', error);
            next(error);
        }
    }

    /**
     * Récupère les détails d'une signature
     */
    async getSignatureDetails(req, res, next) {
        try {
            const { signatureId } = req.params;

            if (!signatureId) {
                return res.status(400).json({
                    success: false,
                    error: 'ID de signature requis'
                });
            }

            const signature = await signatureService.getSignature(signatureId);

            res.json({
                success: true,
                signature: signature
            });

        } catch (error) {
            console.error('Erreur lors de la récupération de la signature:', error);
            next(error);
        }
    }

    /**
     * Génère un certificat de signature électronique
     */
    async generateSignatureCertificate(req, res, next) {
        try {
            const { signatureId } = req.params;

            if (!signatureId) {
                return res.status(400).json({
                    success: false,
                    error: 'ID de signature requis'
                });
            }

            const signature = await signatureService.getSignature(signatureId);
            const auditReport = signatureService.generateAuditReport(signature.certificate_data);

            res.json({
                success: true,
                certificate: signature.certificate_data,
                auditReport: auditReport
            });

        } catch (error) {
            console.error('Erreur lors de la génération du certificat:', error);
            next(error);
        }
    }

    /**
     * Liste toutes les signatures d'une entreprise
     */
    async getCompanySignatures(req, res, next) {
        try {
            const companyId = req.user.company_id;
            const { page = 1, limit = 50, documentType } = req.query;

            const skip = (parseInt(page) - 1) * parseInt(limit);
            const take = parseInt(limit);

            const signatures = await prisma.electronicSignature.findMany({
                where: {
                    documentType: documentType || undefined,
                },
                orderBy: {
                    signedAt: 'desc'
                },
                skip,
                take
            });

            res.json({
                success: true,
                signatures: signatures.map(this.mapSignatureFromPrisma),
                pagination: {
                    page: parseInt(page),
                    limit: take,
                    total: signatures.length // Note: would need count() for accurate total
                }
            });

        } catch (error) {
            console.error('Erreur lors de la récupération des signatures:', error);
            next(error);
        }
    }

    /**
     * Révoque une signature (rend invalide)
     */
    async revokeSignature(req, res, next) {
        try {
            const { signatureId } = req.params;
            const companyId = req.user.company_id;
            const { reason } = req.body;

            if (!signatureId) {
                return res.status(400).json({
                    success: false,
                    error: 'ID de signature requis'
                });
            }

            // Vérifie que la signature existe
            const signature = await prisma.electronicSignature.findUnique({
                where: { id: signatureId }
            });

            if (!signature) {
                return res.status(404).json({
                    success: false,
                    error: 'Signature non trouvée'
                });
            }

            // Met à jour le statut de la signature
            await prisma.electronicSignature.update({
                where: { id: signatureId },
                data: {
                    isValid: false,
                    revokedAt: new Date(),
                    revocationReason: reason || 'Révoqué par l\'entreprise'
                }
            });

            res.json({
                success: true,
                message: 'Signature révoquée avec succès'
            });

        } catch (error) {
            console.error('Erreur lors de la révocation de la signature:', error);
            next(error);
        }
    }
}

module.exports = new SignatureController();
