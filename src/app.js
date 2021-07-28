const express = require('express')
const app = express()

const rotasPetisco = require('./controllers/petisco-controller')
const Petisco = require('./models/petisco-model')
const db = require('./infra/db-sqlite')

app.use(express.json())

rotasPetisco(app, db)

module.exports = app