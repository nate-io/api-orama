/**
 * Export config as clean JS object
 */
import dotenv from 'dotenv'
dotenv.config()

export default {
  db: {
    url: process.env.DB_URL
  },
  port: process.env.PORT
}