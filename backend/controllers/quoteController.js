const quoteService = require('../services/quoteService');
const { quoteSchema } = require('../validations/quote');

const getAllQuotes = async (req, res, next) => {
    try {
        const companyId = req.user.company_id;
        const quotes = await quoteService.getAllQuotes(companyId);
        res.json(quotes);
    } catch (error) {
        next(error);
    }
};

const getQuoteById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyId = req.user.company_id;
        const quote = await quoteService.getQuoteById(id, companyId);
        res.json(quote);
    } catch (error) {
        next(error);
    }
};

const createQuote = async (req, res, next) => {
    try {
        const companyId = req.user.company_id;

        // Validate input
        const { error, value } = quoteSchema.validate({ ...req.body, company_id: companyId });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const quote = await quoteService.createQuote(value);
        res.status(201).json(quote);
    } catch (error) {
        next(error);
    }
};

const updateQuote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyId = req.user.company_id;

        // Validate input
        const { error, value } = quoteSchema.validate({ ...req.body, company_id: companyId });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const quote = await quoteService.updateQuote(id, value);
        res.json(quote);
    } catch (error) {
        next(error);
    }
};

const updateQuoteStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyId = req.user.company_id;
        const { status, additionalData } = req.body;

        const quote = await quoteService.updateQuoteStatus(id, companyId, status, additionalData);
        res.json(quote);
    } catch (error) {
        next(error);
    }
};

const deleteQuote = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyId = req.user.company_id;
        await quoteService.deleteQuote(id, companyId);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllQuotes,
    getQuoteById,
    createQuote,
    updateQuote,
    updateQuoteStatus,
    deleteQuote
};
