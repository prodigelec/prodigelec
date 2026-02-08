const customerService = require('../../services/customer/customerService');
const { customerSchema } = require('../../validations/customer');

const getAllCustomers = async (req, res, next) => {
    try {
        const companyId = req.user.company_id;
        const customers = await customerService.getAllCustomers(companyId);
        res.json(customers);
    } catch (error) {
        next(error);
    }
};

const getCustomerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyId = req.user.company_id;
        const customer = await customerService.getCustomerById(id, companyId);
        res.json(customer);
    } catch (error) {
        next(error);
    }
};

const createCustomer = async (req, res, next) => {
    try {
        const companyId = req.user.company_id;

        if (!companyId) {
            return res.status(401).json({ error: 'Session incomplète. Veuillez vous reconnecter.' });
        }

        // Validate input
        const { error, value } = customerSchema.validate({ ...req.body, company_id: companyId });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const customer = await customerService.createCustomer(value);
        res.status(201).json(customer);
    } catch (error) {
        next(error);
    }
};

const updateCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyId = req.user.company_id;

        // Validate input
        const { error, value } = customerSchema.validate({ ...req.body, company_id: companyId });
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const customer = await customerService.updateCustomer(id, companyId, value);
        res.json(customer);
    } catch (error) {
        next(error);
    }
};

const deleteCustomer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const companyId = req.user.company_id;
        await customerService.deleteCustomer(id, companyId);
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAllCustomers,
    getCustomerById,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
