import Joi from "joi";

const id = Joi.number().integer();
const content = Joi.string();
const check = Joi.boolean();

export const postTodoShema = Joi.object({
  content: content.required(),
  check: check.required(),
});

export const getTodoShema = Joi.object({
  id: id.required(),
});

export const putTodoShema = Joi.object({
  content,
  check,
});
