const express = require('express');
const router = express.Router();
const customerController = require('../../controllers/customer/customerController');
const { authenticateToken } = require('../../middleware/auth');

// All routes here are protected by authenticateToken
router.use(authenticateToken);

router.get('/', customerController.getAllCustomers);
router.get('/:id', customerController.getCustomerById);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
