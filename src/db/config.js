import 'dotenv/config'

const PORT = process.env.DB_PORT 
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DB_NAME 
const HOST = process.env.DB_HOST 
const USER = process.env.DB_USER

export default {
  development: {
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    port: PORT,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: USER,
    password: PASSWORD,
    database: DATABASE,
    host: HOST,
    dialect: 'mysql',
  },
}
