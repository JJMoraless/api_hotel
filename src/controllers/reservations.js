import { request } from "express";
import { resOk } from "../utils/functions.js";
import { ClientError } from "../utils/errors.js";
import { models } from "../libs/sequelize.js";
import { Op } from "sequelize";

export class ReservationCrll {
  static async create(req = request, res) {
    const { roomNumber, dateEntry, dateOutput } = req.body;
    const roomAvaible = await models.Room.findOne({
      include: [
        {
          model: models.Reservation,
          as: "reservations",
          required: false,

          where: {
            [Op.or]: {
              date_entry: {
                [Op.between]: [new Date(dateEntry), new Date(dateOutput)],
              },

              date_output: {
                [Op.between]: [new Date(dateEntry), new Date(dateOutput)],
              },
            },
          },
        },
      ],

      where: {
        "$reservations.id$": { [Op.is]: null },
        number: roomNumber,
      },
    });

    if (!roomAvaible) {
      throw new ClientError("habitacion no disponible para esas fechas");
    }

    const reservationCreated = await models.Reservation.create({
      ...req.body,
      state: "reservada",
      priceRoom: roomAvaible.pricePerNight,
    });

    resOk(res, { reservation: reservationCreated });
  }

  static async getById(req = request, res) {
    const { id } = req.params;

    const reservation = await models.Reservation.findByPk(id, {
      include: [
        { model: models.Room, as: "room" },

        {
          model: models.User,
          as: "user",
          attributes: { exclude: ["password"] },
        },

        { model: models.Host, as: "host" },
      ],
    });

    resOk(res, { reservation });
  }

  static async get(req = request, res) {
    const {
      page: queryPage = 0,
      limit: queryLimit = 5,
      order = "DESC",
    } = req.query;

    const page = Number(queryPage);
    const limit = Number(queryLimit);

    const reservation = await models.Reservation.findAll({
      offset: page ? limit * page : 0,
      limit,
      include: [{ model: models.Host, as: "host" }],
      order: [["create_at", order]],
    });

    resOk(res, { reservation });
  }

  
  static async update(res, req = request) {}
  static async delete(res, req = request) {}
}
