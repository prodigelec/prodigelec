const Joi = require('joi');

const customerSchema = Joi.object({
    company_id: Joi.string().uuid().required(),
    type: Joi.string().valid('individual', 'professional', 'syndic').required(),
    first_name: Joi.string().allow('', null).default(''),
    last_name: Joi.string().allow('', null).default(''),
    company_name: Joi.string().allow('', null).default(''),
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
    // Règle: Un seul nom est obligatoire pour les lois (Nom ou Raison Sociale)
    const hasLastName = value.last_name && value.last_name.trim() !== '';
    const hasCompanyName = value.company_name && value.company_name.trim() !== '';

    if (!hasLastName && !hasCompanyName) {
        return helpers.error('any.invalid', { message: 'Un nom (particulier) ou une raison sociale (société) est obligatoire' });
    }

    // Validations spécifiques par type (optionnel mais recommandé)
    if (value.type === 'individual' && !hasLastName) {
        return helpers.error('any.invalid', { message: 'Le nom est obligatoire pour un particulier' });
    }

    if ((value.type === 'professional' || value.type === 'syndic') && !hasCompanyName) {
        return helpers.error('any.invalid', { message: 'La raison sociale est obligatoire pour une société ou un syndic' });
    }

    return value;
});

module.exports = {
    customerSchema
};
