import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string();
const stock = Joi.number().integer();
const description = Joi.string();
const price = Joi.number().integer();

export const postConsumableShema = Joi.object({
  name: name.required(),
  stock: stock.required(),
  price: price.required(),
});

export const getConsumableShema = Joi.object({
  id: id.required(),
});

export const putConsumableShema = Joi.object({
  name,
  stock,
  description,
  price,
});
