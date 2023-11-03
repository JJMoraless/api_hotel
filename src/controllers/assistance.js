import { request } from "express";
import { resOk } from "../utils/functions.js";
import { models } from "../libs/sequelize.js";

// en la ruta se usa local strategy que valida las credenciales
// local strategy agrega objeto user al request con los datos de la db

export class AssistanceCrll {
  static async create(req = request, res) {
    const id = req.user.sub;

    const assistance = await models.Assistance.create({
      userId: id,
      ...req.body,
    });

    resOk(res, { assistance });
  }

  static async put(req = request, res) {
    const id = parseInt(req.params.id);

    await models.Assistance.update(req.body, {
      where: { id },
    });

    const assistance = await models.Assistance.findByPk(id);
    resOk(res, { assistance });
  }

  static async get(req = request, res) {
    const assistances = await models.Assistance.findAll();
    resOk(res, { assistances });
  }
}
