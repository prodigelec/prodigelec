const prisma = require("../../config/prisma");

class NewsletterController {
  async subscribe(req, res) {
    try {
      const { email } = req.body;

      if (!email || !email.includes("@")) {
        return res.status(400).json({
          error: "Une adresse e-mail valide est requise.",
        });
      }

      // Simple hash for uniqueness check
      const crypto = require("crypto");
      const emailHash = crypto.createHash("sha256").update(email.toLowerCase()).digest("hex");

      // Check if already subscribed
      const existing = await prisma.newsletter.findUnique({
        where: { email_hash: emailHash },
      });

      if (existing) {
        return res.status(200).json({
          message: "Vous êtes déjà inscrit à notre newsletter.",
        });
      }

      // Insert into database (sans chiffrement pour le moment)
      await prisma.newsletter.create({
        data: {
          encrypted_email: email, // Stocker l'email en clair pour le moment
          email_hash: emailHash,
          iv: "temp",
          auth_tag: "temp",
        },
      });

      return res.status(201).json({
        message: "Inscription à la newsletter confirmée !",
      });
    } catch (error) {
      console.error("Newsletter subscription error:", error.message, error.stack);
      return res.status(500).json({
        error: `Une erreur est survenue lors de l'inscription: ${error.message}`,
      });
    }
  }

  async unsubscribe(req, res) {
    try {
      const { email } = req.body;

      if (!email || !email.includes("@")) {
        return res.status(400).json({
          error: "Une adresse e-mail valide est requise.",
        });
      }

      const crypto = require("crypto");
      const emailHash = crypto.createHash("sha256").update(email.toLowerCase()).digest("hex");

      const existing = await prisma.newsletter.findUnique({
        where: { email_hash: emailHash },
      });

      if (!existing) {
        return res.status(404).json({
          error: "Adresse e-mail non trouvée.",
        });
      }

      await prisma.newsletter.update({
        where: { email_hash: emailHash },
        data: { unsubscribed_at: new Date() },
      });

      return res.status(200).json({
        message: "Désinscription confirmée.",
      });
    } catch (error) {
      console.error("Newsletter unsubscription error:", error);
      return res.status(500).json({
        error: "Une erreur est survenue lors de la désinscription.",
      });
    }
  }
}

module.exports = new NewsletterController();