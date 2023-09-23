import { request } from "express";
import { resOk } from "../utils/functions.js";
import { models } from "../libs/sequelize.js";

export class RegisterCrll {
  static async create(req = request, res) {
    const registerCreated = await models.Register.create(req.body);
    resOk(res, { register: registerCreated });
  }

  static async get(req = request, res) {
    const { page: queryPage = 0, limit: queryLimit = 5 } = req.query;

    const page = Number(queryPage);
    const limit = Number(queryLimit);

    const registersFound = await models.Register.findAll({
      offset: page ? limit * page : 0,
      limit,
      include: [{ model: models.Reservation, as: "reservation" }],
    });
    resOk(res, { registers: registersFound });
  }

  static async getById(req = request, res) {
    const { id } = req.params;
    const registerFound = await models.Register.findByPk(id, {
      include: [{ register: models.Reservation, as: "reservation" }],
    });
    resOk(res, { host: hostFound });
  }

  static async update(res, req = request) {
    resOk(res, {});
  }

  static async addConsumable(req = request, res) {
    const data = req.body;
    const newRegisterConsumable = await models.RegisterConsumable.create(data);
    resOk(res, { consumableAdd: newRegisterConsumable });
  }

  static async delete(res, req = request) {}
}
