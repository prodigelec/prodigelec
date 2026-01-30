const Joi = require('joi');

const loginSchema = Joi.object({
    password: Joi.string().required().messages({
        'string.empty': 'Le mot de passe est requis.'
    }),
    accessCode: Joi.string().length(16).required().messages({
        'string.length': 'Le code d\'accès doit faire 16 caractères.',
        'any.required': 'Le code d\'accès est requis.'
    })
});

module.exports = { loginSchema };
