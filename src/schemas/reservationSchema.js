import Joi from "joi";

const id = Joi.number().integer();
const roomNumber = Joi.number().integer();
const userId = Joi.number().integer();
const hostDocument = Joi.string();
const dateEntry = Joi.date();
const dateOutput = Joi.date();
const numChildrens = Joi.number();
const numAdults = Joi.number();

export const postReservationSchema = Joi.object({
  roomNumber: roomNumber.required(),
  userId: userId.required(),
  hostDocument: hostDocument.required(),
  dateEntry: dateEntry.required(),
  dateOutput: dateOutput.required(),
  numChildrens: numChildrens.required(),
  numAdults: numAdults.required(),
});

export const getShemaReservation = Joi.object({
  id: id.required(),
});

export const putReservationSchema = Joi.object({
  roomNumber,
  userId,
  hostDocument,
  dateEntry,
  dateOutput,
  numChildrens,
  numAdults,
});
