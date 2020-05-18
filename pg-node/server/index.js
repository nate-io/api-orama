const express = require('express')
const Pool = require('pg').Pool
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const config = require('./config')

// setup
const { port, ...dbConnection } = config 
const pool = new Pool(dbConnection)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// routing
app.get('/', (request, response) => {
  response.json({ info: 'It works!' })
})

// check db
app.get('/test_query', (request, response) => {
  let q = 'SELECT * FROM test1'
  pool.query(q, (error, results) => {
    if (error) { throw error }
    response.status(200).json(results.rows)
  })
})

// start
app.listen(port, () => {
  console.log(`${new Date()} listening on ${port}`)
})