const express = require('express');
const router = express.Router();
const siteController = require('../../controllers/site/siteController');
const { authenticateToken } = require('../../middleware/auth');

// All site routes are protected
router.use(authenticateToken);

router.get('/', siteController.getAllSites);
router.get('/customer/:customerId', siteController.getSitesByCustomer);
router.get('/:id', siteController.getSiteById);
router.post('/', siteController.createSite);
router.put('/:id', siteController.updateSite);
router.delete('/:id', siteController.deleteSite);

module.exports = router;
