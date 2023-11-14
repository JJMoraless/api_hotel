import Joi from 'joi'

const id = Joi.number().integer()
const productId = Joi.number().integer()
const roomNumber = Joi.number().integer()
const pricePerNight = Joi.number().integer()
const description = Joi.string()
const type = Joi.string()
const amount = Joi.number().integer()
const imgUrl = Joi.string()
const floor = Joi.number().integer()

export const addConsumableSchema = Joi.object({
  productId: productId.required(),
  roomNumber: roomNumber.required(),
  amount: amount,
})

export const getRoomSchema = Joi.object({
  id: id.required(),
})

export const putRoomSchema = Joi.object({
  pricePerNight,
  description,
  type,
  imgUrl,
  floor,
})
