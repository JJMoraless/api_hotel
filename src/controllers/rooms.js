import { request } from "express";
import { resOk } from "../utils/functions.js";
import { ClientError } from "../utils/errors.js";
import { getRoomsAvailable } from "../utils/dbFunctions.js";
import { models } from "../libs/sequelize.js";
import { Op } from "sequelize";
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
          required: false,
          where: {
            [Op.or]: {
              date_entry: {
                [Op.between]: [new Date(date_entry), new Date(date_output)],
              },

              date_output: {
                [Op.between]: [new Date(date_entry), new Date(date_output)],
              },
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
    const roomsFound = await models.Room.findAll();
    resOk(res, { rooms: roomsFound });
  }

  static async update(res, req = request) {}
  static async delete(res, req = request) {}
}
