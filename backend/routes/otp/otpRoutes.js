const express = require("express");
const router = express.Router();
const otpService = require("../../services/otp/otpService");

/**
 * Routes OTP pour la vérification d'identité avant signature
 */

/**
 * POST /api/otp/send
 * Envoie un code OTP par email
 */
router.post("/send", async (req, res) => {
  try {
    const { email, documentId, documentType } = req.body;

    if (!email || !documentId) {
      return res.status(400).json({
        error: "Email et documentId sont requis",
      });
    }

    const result = await otpService.sendOtp(
      email,
      documentId,
      documentType || "quote",
    );

    res.json({
      success: true,
      message: result.message,
      expiresAt: result.expiresAt,
    });
  } catch (error) {
    console.error("Erreur envoi OTP:", error);
    res.status(500).json({
      error: error.message || "Erreur lors de l'envoi du code",
    });
  }
});

/**
 * POST /api/otp/verify
 * Vérifie un code OTP
 */
router.post("/verify", async (req, res) => {
  try {
    const { email, documentId, code } = req.body;

    if (!email || !documentId || !code) {
      return res.status(400).json({
        error: "Email, documentId et code sont requis",
      });
    }

    const result = await otpService.verifyOtp(email, documentId, code);

    if (result.valid) {
      res.json({
        success: true,
        verified: true,
        message: "Code vérifié avec succès",
      });
    } else {
      res.status(400).json({
        success: false,
        verified: false,
        error: result.error,
      });
    }
  } catch (error) {
    console.error("Erreur vérification OTP:", error);
    res.status(500).json({
      error: error.message || "Erreur lors de la vérification",
    });
  }
});

/**
 * GET /api/otp/status
 * Vérifie si un email est déjà vérifié pour un document
 */
router.get("/status", async (req, res) => {
  try {
    const { email, documentId } = req.query;

    if (!email || !documentId) {
      return res.status(400).json({
        error: "Email et documentId sont requis",
      });
    }

    const isVerified = await otpService.isVerified(email, documentId);

    res.json({
      verified: isVerified,
    });
  } catch (error) {
    console.error("Erreur statut OTP:", error);
    res.status(500).json({
      error: "Erreur lors de la vérification du statut",
    });
  }
});

module.exports = router;
