import { request } from "express";
import { resOk } from "../utils/functions.js";
import { models } from "../libs/sequelize.js";

export class ProductCrll {
  static async create(req = request, res) {
    const newConsumable = await models.Product.create(req.body);
    resOk(res, { consumable: newConsumable });
  }

  static async get(req = request, res) {
    let { page = 0, limit = 5, type } = req.query;
    page = Number(page);
    limit = Number(limit);

    const options = {
      offset: page ? limit * page : 0,
      limit,
    };

    if (type) {
      options.where = { type };
    }

    const consumablesFound = await models.Product.findAll(options);
    resOk(res, { products: consumablesFound });
  }

  static async getById(req = request, res) {
    const { id } = req.params;
    const consumableFound = await models.Product.findByPk(id);
    resOk(res, { consumable: consumableFound });
  }

  static async update(req = request, res) {
    const data = req.body;
    const id = Number(req.params.id);
    await models.Product.update(data, {
      where: {
        id,
      },
    });
    const product = await models.Product.findByPk(id);
    resOk(res, { product });
  }

  static async delete(req = request, res) {
    const id = Number(req.params.id);
    await models.Product.destroy({
      where: {
        id,
      },
    });

    resOk(res, { product: "delete" });
  }
}
