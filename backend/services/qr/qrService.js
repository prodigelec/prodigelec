const QRCode = require("qrcode");

/**
 * Service de génération de QR codes pour la vérification des signatures
 */
class QrService {
  /**
   * Génère un QR code pour la vérification d'une signature
   * @param {string} signatureId - ID de la signature
   * @returns {Promise<string>} - Data URL du QR code (base64)
   */
  async generateVerificationQR(signatureId) {
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const verificationUrl = `${baseUrl}/verify/${signatureId}`;

    try {
      const qrDataUrl = await QRCode.toDataURL(verificationUrl, {
        width: 150,
        margin: 2,
        color: {
          dark: "#1e40af",
          light: "#ffffff",
        },
        errorCorrectionLevel: "M",
      });

      return qrDataUrl;
    } catch (error) {
      console.error("Erreur génération QR:", error);
      throw new Error("Impossible de générer le QR code");
    }
  }

  /**
   * Génère le HTML du QR code pour inclusion dans un PDF
   */
  async generateQRHtmlBlock(signatureId, signerName, signedAt) {
    const qrDataUrl = await this.generateVerificationQR(signatureId);
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    return `
            <div style="display: flex; align-items: center; gap: 15px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 15px; margin-top: 20px;">
                <div style="flex-shrink: 0;">
                    <img src="${qrDataUrl}" alt="QR Verification" style="width: 100px; height: 100px;" />
                </div>
                <div style="flex: 1; font-size: 11px; color: #475569;">
                    <div style="font-weight: bold; color: #1e40af; margin-bottom: 5px;">
                        🔐 Signature Électronique Certifiée
                    </div>
                    <div style="margin-bottom: 3px;">
                        <strong>Signataire:</strong> ${signerName}
                    </div>
                    <div style="margin-bottom: 3px;">
                        <strong>Date:</strong> ${new Date(signedAt).toLocaleString("fr-FR")}
                    </div>
                    <div style="margin-bottom: 3px;">
                        <strong>ID:</strong> <span style="font-family: monospace; font-size: 10px;">${signatureId}</span>
                    </div>
                    <div style="margin-top: 8px; font-size: 10px; color: #64748b;">
                        Scannez le QR code ou visitez:<br>
                        <a href="${baseUrl}/verify/${signatureId}" style="color: #2563eb;">${baseUrl}/verify/${signatureId}</a>
                    </div>
                </div>
            </div>
        `;
  }
}

module.exports = new QrService();
