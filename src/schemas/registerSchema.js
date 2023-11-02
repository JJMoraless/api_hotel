import Joi from "joi";

const id = Joi.number().integer();
const userId = Joi.number().integer();
const reservationId = Joi.number().integer();
const amount = Joi.number().integer();
const travel_reason = Joi.string();
const method = Joi.string();
const document = Joi.string();
const note = Joi.string();

export const getRegisterSchema = Joi.object({
  id: id.required(),
});

export const postRegisterSchema = Joi.object({
  userId: userId.required(),
  reservationId: reservationId.required(),
  travel_reason: travel_reason.required(),
  note
});

export const addProductShema = Joi.object({
  registerId: id.required(),
  productId: id.required(),
  amount: amount.required(),
});

export const addPaymentShema = Joi.object({
  registerId: id.required(),
  amount: amount.required(),
  method: method.required(),
});

export const addCompanionShcema = Joi.object({
  registerId: id.required(),
  companionId: document.required(),
});