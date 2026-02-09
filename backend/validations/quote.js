const Joi = require("joi");

const quoteItemSchema = Joi.object({
  description: Joi.string().required(),
  quantity: Joi.number().precision(2).default(1),
  unit_price: Joi.number().precision(2).required(),
  tva_rate: Joi.number().precision(2).default(20.0),
  total_ht: Joi.number().precision(2).required(),
  item_type: Joi.string().valid("service", "material").default("service"),
  unit: Joi.string().allow("", null).default("unité"),
  sort_order: Joi.number().integer().default(0),
});

const quoteSchema = Joi.object({
  company_id: Joi.string().uuid().required(),
  customer_id: Joi.string().uuid().required(),
  quote_number: Joi.string().required(),
  status: Joi.string()
    .valid("draft", "sent", "signed", "rejected", "invoiced", "cancelled")
    .default("draft"),

  total_ht: Joi.number().precision(2).required(),
  tva_rate: Joi.number().precision(2).default(20.0),
  total_tva: Joi.number().precision(2).required(),
  total_ttc: Joi.number().precision(2).required(),

  valid_until: Joi.date().iso().allow(null),
  notes: Joi.string().allow("", null),
  terms: Joi.string().allow("", null),

  items: Joi.array().items(quoteItemSchema).min(1).required(),
});

module.exports = {
  quoteSchema,
};
