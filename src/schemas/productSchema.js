import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string();
const price = Joi.number().integer();
const type = Joi.string();

export const postProduct = Joi.object({
  name: name.required(),
  price: price.required(),
  type: type.required(),
});

export const getProductShema = Joi.object({
  id: id.required(),
});

export const putProductShema = Joi.object({
  name,
  price,
  type,
});
