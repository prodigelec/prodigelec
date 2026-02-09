/**
 * Service client pour la gestion des signatures électroniques certifiées
 */

class SignatureService {
    constructor() {
        this.baseURL = '/api/signatures';
    }

    /**
     * Créer une nouvelle signature électronique
     * @param {Object} signatureData - Données de la signature
     * @returns {Promise<Object>} Résultat de la signature
     */
    async createSignature(signatureData) {
        try {
            const response = await fetch(`${this.baseURL}/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getAuthToken()}`
                },
                body: JSON.stringify(signatureData)
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Erreur lors de la création de la signature');
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur lors de la création de la signature:', error);
            throw error;
        }
    }

    /**
     * Vérifier la validité d'une signature
     * @param {string} signatureId - ID de la signature
     * @returns {Promise<Object>} Résultat de la vérification
     */
    async verifySignature(signatureId) {
        try {
            const response = await fetch(`${this.baseURL}/verify/${signatureId}`, {
                headers: {
                    'Authorization': `Bearer ${this.getAuthToken()}`
                }
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Erreur lors de la vérification');
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur lors de la vérification:', error);
            throw error;
        }
    }

    /**
     * Récupérer les détails d'une signature
     * @param {string} signatureId - ID de la signature
     * @returns {Promise<Object>} Détails de la signature
     */
    async getSignatureDetails(signatureId) {
        try {
            const response = await fetch(`${this.baseURL}/${signatureId}`, {
                headers: {
                    'Authorization': `Bearer ${this.getAuthToken()}`
                }
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Erreur lors de la récupération des détails');
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur lors de la récupération des détails:', error);
            throw error;
        }
    }

    /**
     * Télécharger le certificat de signature
     * @param {string} signatureId - ID de la signature
     * @returns {Promise<Blob>} Certificat PDF
     */
    async downloadCertificate(signatureId) {
        try {
            const response = await fetch(`${this.baseURL}/${signatureId}/certificate`, {
                headers: {
                    'Authorization': `Bearer ${this.getAuthToken()}`
                }
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Erreur lors du téléchargement');
            }

            return await response.blob();
        } catch (error) {
            console.error('Erreur lors du téléchargement:', error);
            throw error;
        }
    }

    /**
     * Lister les signatures de l'entreprise
     * @param {Object} filters - Filtres optionnels
     * @returns {Promise<Array>} Liste des signatures
     */
    async getCompanySignatures(filters = {}) {
        try {
            const queryParams = new URLSearchParams(filters);
            const response = await fetch(`${this.baseURL}?${queryParams}`, {
                headers: {
                    'Authorization': `Bearer ${this.getAuthToken()}`
                }
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Erreur lors de la récupération');
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur:', error);
            throw error;
        }
    }

    /**
     * Révoquer une signature
     * @param {string} signatureId - ID de la signature
     * @param {string} reason - Raison de la révocation
     * @returns {Promise<Object>} Résultat de la révocation
     */
    async revokeSignature(signatureId, reason) {
        try {
            const response = await fetch(`${this.baseURL}/${signatureId}/revoke`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.getAuthToken()}`
                },
                body: JSON.stringify({ reason })
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Erreur lors de la révocation');
            }

            return await response.json();
        } catch (error) {
            console.error('Erreur lors de la révocation:', error);
            throw error;
        }
    }

    /**
     * Obtenir le token d'authentification
     * @returns {string} Token JWT
     */
    getAuthToken() {
        return localStorage.getItem('token') || '';
    }

    /**
     * Générer un hash SHA-256 d'un document
     * @param {Object} documentData - Données du document
     * @returns {Promise<string>} Hash du document
     */
    async generateDocumentHash(documentData) {
        try {
            // Convertir les données en chaîne JSON ordonnée
            const dataString = JSON.stringify(documentData, Object.keys(documentData).sort());
            
            // Créer le hash SHA-256
            const encoder = new TextEncoder();
            const data = encoder.encode(dataString);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            
            return hashHex;
        } catch (error) {
            console.error('Erreur lors du hashage:', error);
            throw error;
        }
    }

    /**
     * Valider une signature selon le cadre eIDAS
     * @param {Object} signature - Données de la signature
     * @returns {Object} Résultat de la validation
     */
    validateEIDASCompliance(signature) {
        const validation = {
            isValid: true,
            errors: [],
            warnings: []
        };

        // Vérifier la présence des éléments requis
        const requiredFields = [
            'id', 'signature_hash', 'signature_algorithm', 'signed_at',
            'signer_name', 'signer_email', 'certificate_data'
        ];

        for (const field of requiredFields) {
            if (!signature[field]) {
                validation.isValid = false;
                validation.errors.push(`Champ manquant: ${field}`);
            }
        }

        // Vérifier la validité de la date
        if (signature.expires_at && new Date(signature.expires_at) < new Date()) {
            validation.isValid = false;
            validation.errors.push('Signature expirée');
        }

        // Vérifier le statut
        if (!signature.is_valid) {
            validation.isValid = false;
            validation.errors.push('Signature révoquée ou invalide');
        }

        // Vérifier l'algorithme de signature
        const validAlgorithms = ['RSA-SHA256', 'ECDSA-SHA256', 'RSA-PSS-SHA256'];
        if (!validAlgorithms.includes(signature.signature_algorithm)) {
            validation.warnings.push(`Algorithme non standard: ${signature.signature_algorithm}`);
        }

        return validation;
    }
}

// Créer et exporter une instance unique
const signatureService = new SignatureService();
export default signatureService;