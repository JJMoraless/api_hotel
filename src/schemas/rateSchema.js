import Joi from 'joi'

const id = Joi.number().integer()
const type = Joi.string()
const price = Joi.number()

export const postRateShema = Joi.object({
  type: type.required(),
  price: price.required(),
})

export const getRateShema = Joi.object({
  id: id.required(),
})

export const putRateShema = Joi.object({
  type,
  price,
})
