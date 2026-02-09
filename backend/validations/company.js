const Joi = require("joi");

const companySchema = Joi.object({
  companyName: Joi.string().required().messages({
    "string.empty": "Le nom de l'entreprise est requis.",
    "any.required": "Le nom de l'entreprise est requis.",
  }),
  siret: Joi.string()
    .length(14)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.length": "Le SIRET doit contenir exactement 14 chiffres.",
      "string.pattern.base": "Le SIRET ne doit contenir que des chiffres.",
      "any.required": "Le numéro SIRET est requis.",
    }),
  vatNumber: Joi.string().allow("", null).optional(),
  address: Joi.string().allow("", null).optional(),
  city: Joi.string().allow("", null).optional(),
  zipCode: Joi.string()
    .pattern(/^[0-9]{5}$/)
    .allow("", null)
    .optional()
    .messages({
      "string.pattern.base": "Le code postal doit contenir 5 chiffres.",
    }),
  email: Joi.string().email().required().messages({
    "string.email": "L'adresse email est invalide.",
    "any.required": "L'adresse email est requise.",
  }),
  phone: Joi.string()
    .pattern(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/)
    .allow("", null)
    .optional()
    .messages({
      "string.pattern.base": "Le numéro de téléphone est invalide.",
    }),
  legalForm: Joi.string().allow("", null).optional(),
  logoUrl: Joi.string().uri().allow("", null).optional(),
  logoData: Joi.string().allow("", null).optional(),
}).unknown(true);

const siretSchema = Joi.object({
  siret: Joi.string()
    .length(14)
    .pattern(/^[0-9]+$/)
    .required()
    .messages({
      "string.length": "Le SIRET doit contenir exactement 14 chiffres.",
      "string.pattern.base": "Le SIRET ne doit contenir que des chiffres.",
      "any.required": "Le numéro SIRET est requis.",
    }),
});

module.exports = {
  companySchema,
  siretSchema,
};
