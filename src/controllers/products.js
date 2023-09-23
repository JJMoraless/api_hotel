import { request } from "express";
import { resOk } from "../utils/functions.js";
import { models } from "../libs/sequelize.js";

export class ConsumableCrll {
  static async create(req = request, res) {
    const newConsumable = await models.Product.create(req.body);
    resOk(res, { consumable: newConsumable });
  }

  static async get(req = request, res) {
    const { page: queryPage = 0, limit: queryLimit = 5 } = req.query;
    const page = Number(queryPage);
    const limit = Number(queryLimit);

    const consumablesFound = await models.Product.findAll({
      offset: page ? limit * page : 0,
      limit,
    });

    resOk(res, { consumables: consumablesFound });
  }

  static async getById(req = request, res) {
    const { id } = req.params;
    const consumableFound = await models.Product.findByPk(id);
    resOk(res, { consumable: consumableFound });
  }

  static async update(res, req = request) {
    resOk(res, {});
  }

  static async delete(res, req = request) {}
}
