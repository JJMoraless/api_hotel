import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string();
const amount = Joi.number().integer();
const type = Joi.string();
const idRegister = Joi.number().integer();

export const postPaymentSchema = Joi.object({
  amount: amount.required(),
  type: type.required(),
  idRegister: idRegister.required(),
});

export const getPaymentSchema = Joi.object({
  id: id.required(),
});

export const putPaymanetShema = Joi.object({
  amount,
  type,
});
