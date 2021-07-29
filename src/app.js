// Importando express, cors e habilitando o express em uma variável
const express = require('express')
const cors = require('cors')
const app = express()

// Importando o controlador, modelo e o banco de dados
const rotasPetisco = require('./controllers/petisco-controller')
const Petisco = require('./models/petisco-model')
const db = require('./infra/db-sqlite')

// Implementando tradução pelo express e o cors
app.use(express.json())
app.use(cors())

// Chamando o app e db no controlador
rotasPetisco(app, db)

// Exportando variável
module.exports = app