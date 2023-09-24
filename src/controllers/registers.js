import { request } from "express";
import { resOk } from "../utils/functions.js";
import { models } from "../libs/sequelize.js";

export class RegisterCrll {
  static async create(req = request, res) {
    const { reservationId } = req.body;

    await models.Reservation.update(
      { state: "checkIn" },
      {
        where: {
          id: reservationId,
        },
      }
    );

    const registerCreated = await models.Register.create(req.body, {
      include: [{ model: models.Reservation, as: "reservation" }],
    });
    console.log(
      "🚀 ~ file: registers.js:19 ~ RegisterCrll ~ create ~ registerCreated:",
      registerCreated
    );
    resOk(res, { register: registerCreated });
  }

  static async get(req = request, res) {
    let { page = 0, limit = 5 } = req.query;
    page = Number(page);
    limit = Number(limit);
    const registersFound = await models.Register.findAll({
      offset: page ? limit * page : 0,
      limit,
      include: [{ model: models.Reservation, as: "reservation" }],
      order: [["id", "DESC"]],
    });
    resOk(res, { registers: registersFound });
  }

  static async getById(req = request, res) {
    const { id } = req.params;
    const registerFound = await models.Register.findByPk(Number(id), {
      include: ["reservation"],
    });
    resOk(res, { host: registerFound });
  }

  static async getByIdWithProducts(req = request, res) {
    const { id } = req.params;
    const registerFound = await models.Register.findByPk(Number(id), {
      include: [
        {
          model: models.Product,
          as: "products",
        },
        {
          model: models.Reservation,
          as: "reservation",
        },
      ],
    });

    resOk(res, { register: registerFound });
  }

  static async update(res, req = request) {
    resOk(res, {});
  }

  static async addConsumable(req = request, res) {
    const { productId, registerId, amount } = req.body;
    const registerProduct = await models.RegisterProduct.findOne({
      where: { productId, registerId },
    });
    if (registerProduct) {
      await registerProduct.increment({ amount });
      const UpdatedRegisterProduct = await models.RegisterProduct.findByPk(
        registerProduct.id
      );
      return resOk(res, { consumable: UpdatedRegisterProduct });
    }
    const product = await models.Product.findByPk(Number(productId));
    const newRegisterConsumable = await models.RegisterProduct.create({
      ...req.body,
      price: product.price,
    });
    resOk(res, { consumable: newRegisterConsumable });
  }

  static async delete(res, req = request) {}
}
