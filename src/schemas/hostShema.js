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

export const postShemaHost = Joi.object({
  document: document.required(),
  name: name.required(),
  birthdayDate: birthdayDate.required(),
  email: email.required(),
  addres: addres.required(),
  city: city.required(),
  country: country.required(),
  numberPhone: numberPhone.required(),
  occupation: occupation.required(),
});
