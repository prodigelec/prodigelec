const Joi = require('joi');

const customerSchema = Joi.object({
    name: Joi.string().min(2).max(100).required().messages({
        'string.min': 'Le nom doit contenir au moins 2 caractères.',
        'any.required': 'Le nom est requis.'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Veuillez saisir une adresse e-mail valide.',
        'any.required': 'L\'e-mail est requis.'
    }),
    phone: Joi.string().pattern(/^[0-9+ ]+$/).optional().messages({
        'string.pattern.base': 'Format de téléphone invalide.'
    }),
    address: Joi.string().max(255).optional()
});

module.exports = { customerSchema };
