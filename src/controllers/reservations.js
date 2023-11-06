import {request} from 'express'
import {resOk} from '../utils/functions.js'
import {ClientError} from '../utils/errors.js'
import {models} from '../libs/sequelize.js'
import {Op} from 'sequelize'

export class ReservationCrll {
  static async create(req = request, res) {
    const {roomNumber, dateEntry, dateOutput} = req.body

    if (new Date(dateOutput) < new Date(dateEntry))
      throw new ClientError('dates error')

    const reservations = await models.Reservation.findAll({
      where: {
        date_entry: {
          [Op.lte]: new Date(dateOutput),
        },
        date_output: {
          [Op.gte]: new Date(dateEntry),
        },
        roomNumber,
      },
    })

    if (reservations.length > 0)
      throw new ClientError('habitacion no disponible para esas fechas')

    const roomAvaible = await models.Room.findByPk(roomNumber)
    const reservationCreated = await models.Reservation.create({
      ...req.body,
      state: 'reservada',
      priceRoom: roomAvaible.pricePerNight,
    })

    resOk(res, {reservation: reservationCreated})
  }

  static async getById(req = request, res) {
    const {id} = req.params

    const reservation = await models.Reservation.findByPk(id, {
      include: [
        {model: models.Room, as: 'room'},

        {
          model: models.User,
          as: 'user',
          attributes: {exclude: ['password']},
        },

        {model: models.Host, as: 'host'},
        {model: models.Register, as: 'register'},
      ],
    })

    resOk(res, {reservation})
  }

  static async get(req = request, res) {
    const {
      page: queryPage = 0,
      limit: queryLimit = 5,
      order = 'DESC',
      state = 'reservada', // reservada checkIn cancell
      hostDocument,
      fechaIngreso,
    } = req.query

    const page = Number(queryPage)
    const limit = Number(queryLimit)

    const options = {
      offset: page ? limit * page : 0,
      limit,
      include: [
        {model: models.Host, as: 'host'},
        {model: models.Register, as: 'register'},
      ],
      order: [['create_at', order]],
      where: {
        [Op.or]: [{state: state}, {state: 'reservada'}],
      },
    }

    if (hostDocument) options.where.hostDocument = hostDocument
    if (fechaIngreso) options.where.dateEntry = fechaIngreso

    const reservation = await models.Reservation.findAll(options)

    resOk(res, {reservation})
  }

  static async update(req = request, res) {
    const {id} = req.params
    const data = req.body
    await models.Reservation.update(
      {...data},
      {
        where: {
          id: id,
        },
      },
    )
    const reservationsUpdate = await models.Reservation.findByPk(id)
    resOk(res, {reservation: reservationsUpdate})
  }

  static async delete(req = request, res) {
    const {id} = req.params

    const reservationDelete = await models.Reservation.destroy({
      where: {id: id},
    })

    resOk(res, {reservation: reservationDelete})
  }
}
