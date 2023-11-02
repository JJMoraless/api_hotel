import Joi from "joi";

const id = Joi.number().integer();
const productId = Joi.number().integer();
const roomNumber = Joi.number().integer();
const amount = Joi.number();

export const addConsumableSchema = Joi.object({
  productId: productId.required(),
  roomNumber: roomNumber.required(),
  amount: amount,
});
