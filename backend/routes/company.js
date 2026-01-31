const express = require('express');
const router = express.Router();
const { checkSiret, saveCompany, getCompany } = require('../controllers/companyController');
const authMiddleware = require('../middleware/auth'); // Optional: protect this route?

router.get('/check-siret', checkSiret);
router.post('/save', saveCompany); // Add authMiddleware if needed later
router.get('/get', getCompany);

module.exports = router;
