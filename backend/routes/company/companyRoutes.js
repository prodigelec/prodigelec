const express = require('express');
const router = express.Router();
const { checkSiret, saveCompany, getCompany } = require('../../controllers/company/companyController');
const validate = require('../../middleware/validate');
const { authenticateToken } = require('../../middleware/auth');
const portalOrAdminAuth = require('../../middleware/portalOrAdminAuth');
const { companySchema } = require('../../validations/company');

router.get('/check-siret', authenticateToken, checkSiret);
router.post('/save', authenticateToken, validate(companySchema), saveCompany);
router.get('/get', portalOrAdminAuth, getCompany);

module.exports = router;
