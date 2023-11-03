import Joi from "joi";

const logoutDate = Joi.date();
const id = Joi.number();

export const getSchemaAssistance = Joi.object({
  id: id.required(),
});

export const postShemaAssistance = Joi.object({
  logoutDate: logoutDate.required(),
});
