/**
 * Export config as clean JS object
 */
import dotenv from 'dotenv'
dotenv.config()

export default {
  dbConnection: {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    pwd: process.env.PGPASSWORD,
    port: process.env.PGPORT
  },
  port: process.env.PORT
}