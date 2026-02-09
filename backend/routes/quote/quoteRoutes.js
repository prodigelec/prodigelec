const express = require('express');
const router = express.Router();
const quoteController = require('../../controllers/quote/quoteController');
const { authenticateToken } = require('../../middleware/auth');

router.use(authenticateToken);

router.get('/', quoteController.getAllQuotes);
router.get('/:id', quoteController.getQuoteById);
router.post('/', quoteController.createQuote);
router.put('/:id', quoteController.updateQuote);
router.patch('/:id/status', quoteController.updateQuoteStatus);
router.post('/:id/send', quoteController.sendQuoteByEmail);
router.delete('/:id', quoteController.deleteQuote);

module.exports = router;
