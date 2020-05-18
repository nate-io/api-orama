/**
 * Export config as clean JS object
 */
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  dbConnection: {
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT
  },
  port: process.env.PORT
}

