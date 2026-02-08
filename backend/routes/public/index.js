const express = require('express');
const router = express.Router();
const signatureRoutes = require('./signature');

/**
 * Routes publiques pour l'accès via token
 * Ces routes ne nécessitent pas d'authentification classique mais utilisent des tokens publics
 */

// Routes de signature électronique publiques
router.use('/signature', signatureRoutes);

module.exports = router;