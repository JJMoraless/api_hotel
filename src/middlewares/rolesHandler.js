import { request, response } from "express";

export const checkRoles = (...roles) => {
  return (req = request, res = response, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
      return res.status(401).json({
        ok: false,
        msg: `su rol es ${role}. necesita estos roles para acceder al recurso ${roles.join(
          ", "
        )}`,
      });
    }
    next();
  };
};
