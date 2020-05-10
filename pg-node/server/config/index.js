/**
 * Export config as clean JS object
 */
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  dbConnection: {
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
  },
  port: process.env.PORT
}

