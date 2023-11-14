import {Sequelize} from 'sequelize'
import {setupModels} from '../db/models/index.js'

const PORT = process.env.DB_PORT
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DB_NAME
const HOST = process.env.DB_HOST
const USER = process.env.DB_USER

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  logging: false,
  timezone: 'America/Bogota',
})

setupModels(sequelize)

export const models = sequelize.models
export default sequelize
