const nodemailer = require('nodemailer');

/**
 * Service pour l'envoi d'emails via SMTP (Hostinger)
 */
class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
    }

    /**
     * Envoie un email de demande de signature au client
     */
    async sendSignatureRequest(customerEmail, customerName, quoteNumber, signatureUrl) {
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: customerEmail,
            subject: `Demande de signature électronique - Devis ${quoteNumber}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 10px;">
                    <h2 style="color: #333;">Bonjour ${customerName},</h2>
                    <p style="color: #555; line-height: 1.6;">
                        Vous avez reçu une demande de signature électronique pour le devis <strong>${quoteNumber}</strong> de la part de <strong>PRODIGELEC</strong>.
                    </p>
                    <p style="color: #555; line-height: 1.6;">
                        Veuillez cliquer sur le bouton ci-dessous pour consulter et signer le document en ligne de manière sécurisée.
                    </p>
                    <div style="text-align: center; margin: 30px 0;">
                        <a href="${signatureUrl}" style="background-color: #2563eb; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Consulter et Signer le Devis</a>
                    </div>
                    <p style="color: #555; font-size: 0.9em; line-height: 1.6;">
                        Ce lien est unique et strictement personnel. Il expirera dans 7 jours.
                    </p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #888; font-size: 0.8em; text-align: center;">
                        Ceci est un message automatique, merci de ne pas y répondre directement.<br>
                        Pour toute question, contactez-nous au <strong>01 23 45 67 89</strong> ou par email à <strong>contact@prodigelec.fr</strong>.
                    </p>
                </div>
            `,
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Email envoyé:', info.messageId);
            return { success: true, messageId: info.messageId };
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email:', error);
            throw new Error(`Échec de l'envoi de l'email: ${error.message}`);
        }
    }

    /**
     * Envoie une confirmation de signature au client
     */
    async sendSignatureConfirmation(customerEmail, customerName, quoteNumber) {
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: customerEmail,
            subject: `Confirmation de signature - Devis ${quoteNumber}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 10px;">
                    <h2 style="color: #333;">Merci ${customerName},</h2>
                    <p style="color: #555; line-height: 1.6;">
                        Nous vous confirmons que le devis <strong>${quoteNumber}</strong> a été signé avec succès de manière électronique.
                    </p>
                    <p style="color: #555; line-height: 1.6;">
                        Vous recevrez prochainement une copie du document finalisé.
                    </p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #888; font-size: 0.8em; text-align: center;">
                        Merci de votre confiance,<br>
                        L'équipe PRODIGELEC
                    </p>
                </div>
            `,
        };

        try {
            await this.transporter.sendMail(mailOptions);
            return { success: true };
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'email de confirmation:', error);
            return { success: false, error: error.message };
        }
    }
}

module.exports = new EmailService();
