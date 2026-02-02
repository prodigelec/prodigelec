const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const authMiddleware = require('../middleware/auth');

router.use(authMiddleware);

router.get('/', quoteController.getAllQuotes);
router.get('/:id', quoteController.getQuoteById);
router.post('/', quoteController.createQuote);
router.put('/:id', quoteController.updateQuote);
router.patch('/:id/status', quoteController.updateQuoteStatus);
router.delete('/:id', quoteController.deleteQuote);

module.exports = router;
