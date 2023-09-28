import { request } from "express";
import { resOk } from "../utils/functions.js";
import { ClientError } from "../utils/errors.js";
import { models } from "../libs/sequelize.js";

export class HostCrll {
  static async create(req = request, res) {
    const hostCreate = await models.Host.create(req.body);
    resOk(res, { user: hostCreate });
  }

  static async get(req = request, res) {
    const { page: queryPage = 0, limit: queryLimit = 5 } = req.query;
    const page = Number(queryPage);
    const limit = Number(queryLimit);

    const hostFound = await models.Host.findAll({
      offset: page ? limit * page : 0,
      limit,
      order:[["create_at", "DESC"]]
    });

    resOk(res, { host: hostFound });
  }

  static async getById(req = request, res) {
    const { id } = req.params;
    const hostFound = await models.Host.findByPk(id);
    resOk(res, { host: hostFound });
  }

  static async update(res, req = request) {
    resOk(res, {});
  }

  static async delete(res, req = request) {}
}
