import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string();
const amount = Joi.number().integer();
const description = Joi.string();
const price = Joi.number().integer();

export const postConsumableShema = Joi.object({
  name: name.required(),
  amount: amount.required(),
  description: description.required(),
  price: price.required(),
});

export const getConsumableShema = Joi.object({
  id: id.required(),
});

export const putConsumableShema = Joi.object({
  name,
  amount,
  description,
  price,
});
