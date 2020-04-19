/**
 * Centralized controller of db connection
 */
import pg from 'pg'
import config from '../config/index.js'

const { Pool } = pg
const { dbConnection } = config

const pool = new Pool({...dbConnection})

export default {
  // use a parameterized query for max safety
  // query: (text, params) => pool.query(text, params)
  query: (text, params = [], callback) => {
    return pool.query(text, params, callback)
  }
}