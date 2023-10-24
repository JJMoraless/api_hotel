import { Sequelize } from "sequelize";
import { setupModels } from "../db/models/index.js";

const DB_NAME = process.env.DB_NAME;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

setupModels(sequelize);

export const models = sequelize.models;
export default sequelize;