import {request} from 'express'
import {resOk} from '../utils/functions.js'
import {models} from '../libs/sequelize.js'

export class RateCrll {
  static async create(req = request, res) {
    const dataReq = req.body
    const rate = await models.Rate.create(dataReq)
    resOk(res, {rate})
  }

  static async getById(req = request, res) {
    const {id} = req.params
    const rate = await models.Rate.findByPk(parseInt(id))
    resOk(res, {rate})
  }

  static async put(req = request, res) {
    const {id} = req.params
    const dataReq = req.body

    await models.Rate.update(dataReq, {
      where: {
        id: parseInt(id),
      },
    })

    const rate = await models.Rate.findByPk(parseInt(id))
    resOk(res, {rate})
  }

  static async get(req = request, res) {
    const rates = await models.Rate.findAll()
    resOk(res, {rates})
  }

  static async delete(req = request, res) {
    const {id} = req.params
    const rateDeleted = await models.Rate.destroy({
      where: {
        id: parseInt(id),
      },
    })

    resOk(res, {rate: rateDeleted})
  }
}
