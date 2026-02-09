const express = require('express');
const router = express.Router();
const signatureController = require('../../controllers/signature/signatureController');
const { authenticateToken } = require('../../middleware/auth');

/**
 * Routes pour la gestion des signatures électroniques certifiées
 * Toutes les routes nécessitent une authentification
 */

// Demander une signature par email
router.post('/request', authenticateToken, (req, res, next) => signatureController.requestSignature(req, res, next));

// Créer une nouvelle signature électronique
router.post('/create', authenticateToken, (req, res, next) => signatureController.createSignature(req, res, next));

// Vérifier la validité d'une signature
router.get('/verify/:signatureId', authenticateToken, (req, res, next) => signatureController.verifySignature(req, res, next));

// Récupérer les détails d'une signature
router.get('/:signatureId', authenticateToken, (req, res, next) => signatureController.getSignatureDetails(req, res, next));

// Générer un certificat de signature PDF
router.get('/:signatureId/certificate', authenticateToken, (req, res, next) => signatureController.generateSignatureCertificate(req, res, next));

// Lister toutes les signatures de l'entreprise
router.get('/', authenticateToken, (req, res, next) => signatureController.getCompanySignatures(req, res, next));

// Révoquer une signature
router.post('/:signatureId/revoke', authenticateToken, (req, res, next) => signatureController.revokeSignature(req, res, next));

module.exports = router;
