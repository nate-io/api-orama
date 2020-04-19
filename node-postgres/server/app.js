import express from 'express'

import config from './config/index.js'

const { port } = config 
const app = express()

app.get('/', (req, res) => (
  res.send('Hello world!')
))

app.listen(port, () => {
  console.log(`${new Date()} listening on ${port}`)
})