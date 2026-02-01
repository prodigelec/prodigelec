const express = require('express');
const router = express.Router();
const { checkSiret, saveCompany, getCompany } = require('../controllers/companyController');
const validate = require('../middleware/validate');
const authMiddleware = require('../middleware/auth');
const portalOrAdminAuth = require('../middleware/portalOrAdminAuth');
const { companySchema } = require('../validations/company');

router.get('/check-siret', authMiddleware, checkSiret);
router.post('/save', authMiddleware, validate(companySchema), saveCompany);
router.get('/get', portalOrAdminAuth, getCompany);

module.exports = router;
