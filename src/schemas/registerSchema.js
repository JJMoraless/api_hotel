import Joi from "joi";

const userId = Joi.number().integer();
const reservationId = Joi.string();
const tipoPago = Joi.number().integer();

const postRegisterSchema = {
  userId: userId.required(),
  reservationId: reservationId.required(),
  tipoPago: tipoPago.required(),
};

const getRegisterSchema = {
    
};

