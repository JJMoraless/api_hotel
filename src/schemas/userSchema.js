import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const email = Joi.string().email();
const password = Joi.string();
const numberPhone = Joi.string();
const role = Joi.string();
const addres = Joi.string();
const ficha = Joi.string();
const state = Joi.string();
const document = Joi.string();

export const postUserShema = Joi.object({
  email: email.required(),
  password: password.required(),
  name: name.required(),
  numberPhone: numberPhone.required(),
  role: role.required(),
  addres: addres.required(),
  ficha: ficha.required(),
  document: document.required(),
});

export const getUserShema = Joi.object({
  id: id.required(),
});

export const putUserShema = Joi.object({
  email,
  password,
  name,
  numberPhone,
  role,
  addres,
  ficha,
  state,
  document
});

export const loginUserShema = Joi.object({
  email: email.required(),
  password: password.required(),
});
