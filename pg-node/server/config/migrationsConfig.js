require('dotenv').config()

module.exports = {
  development: {
    host: process.env.PG_HOST,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    dialect: 'postgres',
    operatorsAliases: 'false'
  },
  test: {
    // filled via env CI/CD, so should be same values?
  },
  production: {
    // filled via env prod, so should be same values?
  }
}
