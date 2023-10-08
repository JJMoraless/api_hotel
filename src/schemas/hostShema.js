import Joi from "joi";

const document = Joi.string();
const name = Joi.string();
const birthdayDate = Joi.date();
const email = Joi.string().email();
const addres = Joi.string();
const city = Joi.string();
const numberPhone = Joi.number().integer();
const country = Joi.string();
const occupation = Joi.string();
const company = Joi.string();
const document_type = Joi.string();


export const getSchemaHost = Joi.object({
  document: document.required(),
});

export const postShemaHost = Joi.object({
  document: document.required(),
  name: name.required(),
  birthdayDate,
  email: email.required(),
  addres,
  city,
  country,
  numberPhone: numberPhone.required(),
  occupation,
  company,
  document_type
});

export const putSchemaHost = Joi.object({
  document,
  name,
  birthdayDate,
  email,
  addres,
  city,
  country,
  numberPhone,
  occupation,
  company,
  document_type
});
