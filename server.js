//chamada ao microframework express
const express = require('express')
const requireDir = require('require-dir')

//importação do mongoose
const mongoose = require('mongoose')

//iniciando a aplicação
const app = express()

//permite o envio de dados para a aplicação usando o formato json
app.use(express.json())

//estabelecendo a conexão com o banco
mongoose.connect('mongodb://localhost:27017/apianotaai', { useNewUrlParser: true })

//load models
requireDir('./src/models')

//rotas: estamos definindo uma rota primaria chamada /api a partir daí ele redireciona para o arquivo routes onde estarão as outras rotas
app.use('/api/', require('./src/routes'))

//porta escolhida: 3001
app.listen(3001)
