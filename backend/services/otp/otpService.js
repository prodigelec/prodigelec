const crypto = require("crypto");
const prisma = require("../../config/prisma");
const emailService = require("../email/emailService");

/**
 * Service OTP pour la vérification d'identité avant signature
 * Conforme aux bonnes pratiques INPI/Lex Community
 */
class OtpService {
  constructor() {
    this.otpLength = 6;
    this.otpExpiration = 5 * 60 * 1000; // 5 minutes in ms
  }

  /**
   * Génère un code OTP sécurisé
   */
  generateOtp() {
    // Generate cryptographically secure random number
    const buffer = crypto.randomBytes(4);
    const num = buffer.readUInt32BE(0);
    // Convert to 6-digit string
    const otp = String(num % 1000000).padStart(this.otpLength, "0");
    return otp;
  }

  /**
   * Crée et envoie un OTP pour la signature
   */
  async sendOtp(email, documentId, documentType = "quote") {
    const otp = this.generateOtp();
    const expiresAt = new Date(Date.now() + this.otpExpiration);

    // Store OTP in database
    await prisma.signatureOtp.upsert({
      where: {
        email_documentId: {
          email,
          documentId: String(documentId),
        },
      },
      update: {
        code: otp,
        expiresAt,
        attempts: 0,
        verified: false,
      },
      create: {
        email,
        documentId: String(documentId),
        documentType,
        code: otp,
        expiresAt,
        attempts: 0,
        verified: false,
      },
    });

    // Send OTP via email
    await this.sendOtpEmail(email, otp);

    return {
      success: true,
      expiresAt,
      message: "Code de vérification envoyé par email",
    };
  }

  /**
   * Envoie l'email contenant le code OTP
   */
  async sendOtpEmail(email, otp) {
    const mailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: "🔐 Votre code de vérification pour la signature",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 10px;">
                    <div style="text-align: center; margin-bottom: 20px;">
                        <div style="font-size: 40px;">🔐</div>
                        <h2 style="color: #1e40af; margin: 10px 0;">Code de vérification</h2>
                    </div>
                    
                    <p style="color: #555; line-height: 1.6; text-align: center;">
                        Pour confirmer votre identité et signer le document, veuillez saisir le code suivant :
                    </p>
                    
                    <div style="text-align: center; margin: 30px 0;">
                        <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); color: white; font-size: 32px; font-weight: bold; letter-spacing: 8px; padding: 20px 40px; border-radius: 10px; display: inline-block; font-family: monospace;">
                            ${otp}
                        </div>
                    </div>
                    
                    <p style="color: #888; font-size: 0.9em; text-align: center;">
                        ⏱️ Ce code expire dans <strong>5 minutes</strong>
                    </p>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                    
                    <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 12px; margin-top: 20px;">
                        <p style="color: #92400e; font-size: 0.85em; margin: 0; text-align: center;">
                            ⚠️ Si vous n'avez pas demandé ce code, ignorez cet email.
                        </p>
                    </div>
                    
                    <p style="color: #888; font-size: 0.75em; text-align: center; margin-top: 20px;">
                        Cette vérification garantit la sécurité de votre signature électronique<br>
                        conformément au règlement eIDAS.
                    </p>
                </div>
            `,
    };

    try {
      await emailService.transporter.sendMail(mailOptions);
      console.log(`OTP envoyé à ${email}`);
      return { success: true };
    } catch (error) {
      console.error("Erreur envoi OTP:", error);
      throw new Error(`Échec de l'envoi du code: ${error.message}`);
    }
  }

  /**
   * Vérifie un code OTP
   */
  async verifyOtp(email, documentId, code) {
    const otpRecord = await prisma.signatureOtp.findUnique({
      where: {
        email_documentId: {
          email,
          documentId: String(documentId),
        },
      },
    });

    if (!otpRecord) {
      return {
        valid: false,
        error: "Aucun code trouvé. Veuillez en demander un nouveau.",
      };
    }

    // Check if already verified
    if (otpRecord.verified) {
      return { valid: true, alreadyVerified: true };
    }

    // Check expiration
    if (new Date() > otpRecord.expiresAt) {
      return {
        valid: false,
        error: "Code expiré. Veuillez en demander un nouveau.",
      };
    }

    // Check max attempts (max 3)
    if (otpRecord.attempts >= 3) {
      return {
        valid: false,
        error: "Trop de tentatives. Veuillez demander un nouveau code.",
      };
    }

    // Verify code
    if (otpRecord.code !== code) {
      // Increment attempts
      await prisma.signatureOtp.update({
        where: { id: otpRecord.id },
        data: { attempts: otpRecord.attempts + 1 },
      });
      return { valid: false, error: "Code incorrect." };
    }

    // Mark as verified
    await prisma.signatureOtp.update({
      where: { id: otpRecord.id },
      data: { verified: true, verifiedAt: new Date() },
    });

    return { valid: true };
  }

  /**
   * Vérifie si un email a déjà été vérifié pour un document
   */
  async isVerified(email, documentId) {
    const otpRecord = await prisma.signatureOtp.findUnique({
      where: {
        email_documentId: {
          email,
          documentId: String(documentId),
        },
      },
    });

    return otpRecord?.verified === true;
  }
}

module.exports = new OtpService();
