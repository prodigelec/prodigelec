const Joi = require('joi');

const customerSchema = Joi.object({
    company_id: Joi.string().uuid().required(),
    type: Joi.string().valid('individual', 'professional', 'syndic').required(),
    first_name: Joi.string().allow('', null),
    last_name: Joi.string().allow('', null),
    company_name: Joi.string().allow('', null),
    email: Joi.string().email().allow('', null),
    phone: Joi.string().allow('', null),
    address: Joi.string().allow('', null),
    city: Joi.string().allow('', null),
    zip_code: Joi.string().allow('', null),
    notes: Joi.string().allow('', null),
    siret: Joi.string().allow('', null),
    vat_number: Joi.string().allow('', null),
    delivery_address: Joi.string().allow('', null),
    delivery_city: Joi.string().allow('', null),
    delivery_zip_code: Joi.string().allow('', null),
    payment_terms: Joi.string().allow('', null),
    tags: Joi.array().items(Joi.string()).default([]),
    status: Joi.string().valid('active', 'inactive', 'lead').default('active')
}).custom((value, helpers) => {
    // Custom validation: 
    // If individual, first_name and last_name are required (or at least one of them usually, but let's be strict if we want, or loose)
    // If professional, company_name is required

    if ((value.type === 'professional' || value.type === 'syndic') && !value.company_name) {
        return helpers.error('any.invalid', { message: 'Le nom de la société ou du syndic est obligatoire' });
    }
    // SIRET is mandatory for professionals for electronic invoicing (Factur-X/2026 reform)
    // For Syndics it depends, but let's keep it optional for now as requested.
    if (value.type === 'professional' && !value.siret) {
        // Uncomment to enforce strict compliance
        // return helpers.error('any.invalid', { message: 'Le SIRET est obligatoire pour la facturation électronique' });
    }

    if (value.type === 'individual' && (!value.last_name)) {
        // Let's require at least last name for individual
        return helpers.error('any.invalid', { message: 'Le nom est obligatoire pour les particuliers' });
    }
    return value;
});

module.exports = {
    customerSchema
};
