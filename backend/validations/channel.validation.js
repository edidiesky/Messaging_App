import Joi from "joi";

export const createChannelSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  slug: Joi.string().min(3).max(100).required(),
  image: Joi.string().uri().optional(),
  description: Joi.string().max(500).optional(),
});

export const updateChannelSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional(),
  slug: Joi.string().min(3).max(100).optional(),
  image: Joi.string().uri().optional(),
  description: Joi.string().max(500).optional(),
});
