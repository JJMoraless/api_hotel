import {request} from 'express'
import {resOk} from '../utils/functions.js'
import {models} from '../libs/sequelize.js'

// en la ruta se usa local strategy que valida las credenciales
// local strategy agrega objeto user al request con los datos de la db

export class AssistanceCrll {
  static async create(req = request, res) {
    const userId = req.user.sub
    const assistanceData = {userId, ...req.body}
    const assistance = await models.Assistance.create(assistanceData)
    resOk(res, {assistance})
  }

  static async put(req = request, res) {
    const assistanceId = parseInt(req.params.id)
    await models.Assistance.update(req.body, {where: {id: assistanceId}})
    const updatedAssistance = await models.Assistance.findByPk(assistanceId)

    resOk(res, {assistance: updatedAssistance})
  }

  static async get(req = request, res) {
    const assistances = await models.Assistance.findAll()
    resOk(res, {assistances})
  }

  static async delete(req = request, res) {
    const assistanceId = parseInt(req.params.id)
    await models.Assistance.destroy({where: {id: assistanceId}})
    const deletedAssistance = await models.Assistance.findByPk(assistanceId)
    resOk(res, {assistance: deletedAssistance})
  }
}
