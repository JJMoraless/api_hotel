import { request } from "express";
import { createToken } from "../utils/jwt.js";
import { resOk } from "../utils/functions.js";
import { models } from "../libs/sequelize.js";  

// en la ruta se usa local strategy que valida las credenciales
// local strategy agrega objeto user al request con los datos de la db

export class AuthCrll {
  static async login(req = request, res) {
    const { user } = req;

    const token = await createToken({
      sub: user.id,
      role: user.role,
    });
    
    const asistance = await models.Assistance.create({userId: user.id})
    res.cookie("token", token);
    resOk(res, { token, user, asistance });
  }
}
