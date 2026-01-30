const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const validate = require('../middleware/validate');
const { customerSchema } = require('../validations/customers');

router.get('/', customerController.getAllCustomers);
router.post('/', validate(customerSchema), customerController.createCustomer);

module.exports = router;
