const { v4: uuidv4 } = require('uuid');
const prisma = require('../../config/prisma');
const emailService = require('../email/emailService');

/**
 * Service pour orchestrer le flux de signature électronique
 */
class SignatureFlowService {
    /**
     * Initie une demande de signature pour un devis
     */
    async initiateSignatureRequest(documentId, documentType, companyId) {
        try {
            // 1. Récupérer les informations du document et du client
            // Note: Pour l'instant on ne gère que les devis (quotes) comme défini dans le schéma Prisma
            if (documentType !== 'quote') {
                throw new Error('Seuls les devis sont supportés pour la signature pour le moment');
            }

            const document = await prisma.quote.findFirst({
                where: {
                    id: documentId,
                    companyId
                },
                include: {
                    customer: true
                }
            });

            if (!document) {
                throw new Error('Document non trouvé');
            }

            if (!document.customer?.email) {
                throw new Error('Le client n\'a pas d\'adresse email renseignée');
            }

            // 2. Créer un token public sécurisé
            const token = uuidv4();
            const expiresAt = new Date();
            expiresAt.setDate(expiresAt.getDate() + 7); // Valable 7 jours

            await prisma.publicToken.create({
                data: {
                    token,
                    documentId,
                    documentType,
                    customerId: document.customerId,
                    companyId,
                    expiresAt,
                    status: 'active'
                }
            });

            // 3. Construire l'URL de signature
            const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            const signatureUrl = `${frontendUrl}/public/sign/${token}`;

            // 4. Envoyer l'email au client
            const customerName = `${document.customer.firstName || ''} ${document.customer.lastName || ''}`.trim() || document.customer.companyName;
            const quoteNumber = document.quoteNumber;

            await emailService.sendSignatureRequest(
                document.customer.email,
                customerName,
                quoteNumber,
                signatureUrl
            );

            // 5. Mettre à jour le statut du devis
            await prisma.quote.update({
                where: { id: documentId },
                data: {
                    status: 'sent',
                    updatedAt: new Date()
                }
            });

            return {
                success: true,
                message: 'Demande de signature envoyée avec succès',
                token,
                expiresAt
            };

        } catch (error) {
            console.error('Erreur dans initiateSignatureRequest:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }
}

module.exports = new SignatureFlowService();
