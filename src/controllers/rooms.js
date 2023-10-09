import { request, response } from "express";
import { resOk } from "../utils/functions.js";
import { ClientError } from "../utils/errors.js";
import { getRoomsAvailable } from "../utils/dbFunctions.js";
import { models } from "../libs/sequelize.js";
import { DATE, Op } from "sequelize";

export class RoomCrll {
  static async create(req = request, res) {}

  static async getAvailable(req = request, res) {
    const { date_entry, date_output } = req.query;
    
    if (!date_entry || !date_output) {
      throw new ClientError("debe filtrar por date_entry y date_output ");
    }

    const roomsAvaible = await models.Room.findAll({
      include: [
        {
          model: models.Reservation,
          as: "reservations",
          where: {
            date_entry: {
              [Op.lte]: new Date(date_output),
            },
            date_output: {
              [Op.gte]: new Date(date_entry),
            },
          },
          required: false,
        },
      ],
      where: {
        "$reservations.id$": { [Op.is]: null },
      },
    });
    resOk(res, { rooms: roomsAvaible });
  }

  static async get(req = request, res) {
    const roomsFound = await models.Room.findAll();
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

    if (amount < 0 && inventory.amount < Math.abs(amount)) {
      throw new ClientError("no hay tanto para sacar");
    }

    await inventory.increment({ amount });
    const newInventory = await models.Inventary.findByPk(inventory.id);
    resOk(res, { inventory: newInventory });
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
          order: [["id", "DESC"]],
          limit: 1,
          include: ["register"],
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
