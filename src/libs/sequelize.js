import {Sequelize} from 'sequelize'
import {setupModels} from '../db/models/index.js'

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const PASSWORD = process.env.PASSWORD

const sequelize = new Sequelize(DB_NAME, DB_USER, PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
  timezone: 'America/Bogota',
})

setupModels(sequelize)

export const models = sequelize.models
export default sequelize
