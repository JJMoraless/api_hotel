import { request, response } from "express";

export const validatorHandler = (schema, property) => {
  return async (req = request, res = response, next) => {
    try {
      const data = req[property];
      const validatedData = await schema.validateAsync(data, {
        abortEarly: false,
      });
      console.log("🚀 ~ file: shemasHandler.js:10 ~ return ~ validatedData:", validatedData)
      next();
    } catch (error) {
      console.log("🚀 ~ file: validateShemas.js:11 ~ return ~ error:", error);
      return res.status(400).json({
        errors: error.details.map(({ message, path: [path] }) => ({
          message,
          path,
        })),
      });
    }
  };
};
