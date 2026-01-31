const express = require('express');
const router = express.Router();
const { checkSiret, saveCompany, getCompany } = require('../controllers/companyController');
const validate = require('../middleware/validate');
const { companySchema } = require('../validations/company');

router.get('/check-siret', checkSiret);
router.post('/save', validate(companySchema), saveCompany);
router.get('/get', getCompany);

module.exports = router;
