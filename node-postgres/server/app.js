import express from 'express'
import config from './config/index.js'
import db from './loaders/db.js'

const { port } = config 
const app = express()

app.get('/', (req, res) => (
  db.query('SELECT * FROM test1', (err, result) => {
    if (err) {
      console.log(err)
    }
    res.send(result.rows)
  })
))

app.listen(port, () => {
  console.log(`${new Date()} listening on ${port}`)
})