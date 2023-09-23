import Joi from "joi";

const id = Joi.number().integer();
const userId = Joi.number().integer();
const reservationId = Joi.number().integer();
const amount = Joi.number().integer();
const consumableId = Joi.number().integer();

export const postRegisterSchema = Joi.object({
  userId: userId.required(),
  reservationId: reservationId.required(),
});

export const addConsumableShema = Joi.object({
  registerId: id.required(),
  consumableId: consumableId.required(),
  amount: amount.required(),
});
