import Joi from "joi";

const id = Joi.number().integer();
const content = Joi.string();


export const getNoteShema = Joi.object({
  id: id.required(),
});

export const postNoteShema = Joi.object({
  content: content.required(),
});

export const putNoteShema = Joi.object({
  content,
});
