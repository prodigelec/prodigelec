const jwt = require("jsonwebtoken");
const prisma = require("../config/prisma");
require("dotenv").config();

/**
 * Middleware pour vérifier les tokens publics (e-Devis)
 * Utilisé pour l'accès sécurisé aux documents via liens partagés
 */
const verifyPublicToken = async (req, res, next) => {
  try {
    // Récupérer le token depuis l'en-tête Authorization ou les paramètres de requête
    const authHeader = req.headers.authorization;
    const tokenFromQuery = req.query.token;

    const token = authHeader
      ? authHeader.replace("Bearer ", "")
      : tokenFromQuery;

    if (!token) {
      return res.status(401).json({
        success: false,
        error: "Token public manquant",
      });
    }

    // Vérifier le token dans la base de données via Prisma
    const tokenData = await prisma.publicToken.findUnique({
      where: { token },
    });

    if (!tokenData) {
      return res.status(401).json({
        success: false,
        error: "Token public invalide",
      });
    }

    // Vérifier que le token n'est pas expiré
    if (tokenData.expiresAt && new Date(tokenData.expiresAt) < new Date()) {
      return res.status(401).json({
        success: false,
        error: "Token public expiré",
      });
    }

    // Vérifier que le token n'a pas déjà été utilisé
    if (tokenData.usedAt || tokenData.status === "used") {
      return res.status(401).json({
        success: false,
        error: "Token public déjà utilisé",
      });
    }

    // Ajouter les informations du token à la requête
    req.tokenInfo = {
      token: tokenData.token,
      documentId: tokenData.documentId,
      documentType: tokenData.documentType,
      customerId: tokenData.customerId,
      createdAt: tokenData.createdAt,
      expiresAt: tokenData.expiresAt,
    };

    next();
  } catch (_error) {
    console.error("Erreur lors de la vérification du token public:", _error);
    res.status(500).json({
      success: false,
      error: "Erreur lors de la vérification du token",
    });
  }
};

/**
 * Middleware d'authentification classique (JWT)
 */
const authenticateToken = (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    return res
      .status(401)
      .json({ error: "Accès non autorisé. Token manquant." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (_error) {
    res.clearCookie("token");
    return res.status(401).json({
      error: "Session expirée ou invalide. Veuillez vous reconnecter.",
    });
  }
};

module.exports = {
  verifyPublicToken,
  authenticateToken,
};
