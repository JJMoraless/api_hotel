import { request } from "express";
import { resOk } from "../utils/functions.js";
import { ClientError } from "../utils/errors.js";
import { models } from "../libs/sequelize.js";
import { Op } from "sequelize";
import { format } from "date-fns";

export class RoomCrll {
  static async create(req = request, res) {}

  static async getAvailable(req = request, res) {
    const { date_entry, date_output } = req.query;

    if (!date_entry || !date_output) {
      throw new ClientError("debe filtrar por date_entry y date_output ");
    }

    if (new Date(date_entry) > new Date(date_output)) {
      throw new ClientError("fecha de entrada no debe ser mayor a de salida");
    }

    const roomsAvaible = await models.Room.findAll({
      include: [
        {
          model: models.Reservation,
          as: "reservations",
          required: false,
          where: {
            date_entry: {
              [Op.lte]: new Date(date_output),
            },
            date_output: {
              [Op.gte]: new Date(date_entry),
            },
          },
        },
      ],
      where: {
        "$reservations.id$": { [Op.is]: null },
      },
    });

    resOk(res, { rooms: roomsAvaible });
  }

  static async get(req = request, res) {
    let day = new Date();
    day.setHours(0, 0, 0, 0);

    let midNigth = new Date();
    midNigth.setHours(10, 0, 0, 0);

    day = format(day, "yyyy-MM-dd HH:mm:ss");
    midNigth = format(midNigth, "yyyy-MM-dd HH:mm:ss");

    const roomsFound = await models.Room.findAll({
      include: [
        {
          required: false,
          association: "reservations",
          order: [["id", "DESC"]],
          include: ["register", "host"],
          where: {
            dateEntry: {
              [Op.lte]: midNigth,
            },
            dateOutput: {
              [Op.gte]: day,
            },
          },
        },
      ],
    });

    resOk(res, { rooms: roomsFound });
  }

  static async addConsumable(req = request, res) {
    const { productId, roomNumber, amount } = req.body;

    let inventory = await models.Inventary.findOne({
      where: { productId, roomNumber },
    });

    if (!inventory) {
      inventory = await models.Inventary.create(req.body);
      return resOk(res, { inventory: inventory });
    }

    // if (amount < 0 && inventory.amount < Math.abs(amount)) {
    //   throw new ClientError("no hay tanto para sacar");
    // }

    await inventory.increment({ amount });
    const inventoryUpdated = await models.Inventary.findByPk(inventory.id);
    resOk(res, { inventory: inventoryUpdated });
  }

  static async getByIdWithConsumables(req = request, res) {
    const { id } = req.params;

    const room = await models.Room.findByPk(id, {
      include: ["products"],
    });

    resOk(res, { room });
  }

  static async getByIdOccupied(req = request, res) {
    const { id } = req.params;

    const roomOccupied = await models.Room.findOne({
      include: [
        {
          association: "reservations",
          required: false,
          include: ["register"],
          order: [["id", "DESC"]],

          where: {
            date_entry: {
              [Op.lte]: new Date().setHours(0, 0, 0, 0),
            },

            date_output: {
              [Op.gte]: new Date().setHours(0, 0, 0, 0),
            },
          },
        },
      ],

      where: {
        number: id,
      },
    });

    resOk(res, { room: roomOccupied });
  }
  static async update(res, req = request) {}
  static async delete(res, req = request) {}
}
