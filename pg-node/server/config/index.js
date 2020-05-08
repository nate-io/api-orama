/**
 * Export config as clean JS object
 */
const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  dbConnection: {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    pwd: process.env.PGPASSWORD,
    port: process.env.PGPORT
  },
  port: process.env.PORT
}