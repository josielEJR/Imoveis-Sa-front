const express = require('express')
const app = express.Router()
const path = require('path')

app.use('/imoveis', require('./rotas/imoveis'))
app.use('/visita', require('./rotas/visita'))
app.use('/consultores', require('./rotas/consultores'))
app.use('/clientes', require('./rotas/clientes'))

app.use('/imagens', express.static(path.join(__dirname, 'imagens')))
app.use('/imagensimoveis', express.static(path.join(__dirname, 'imagens-imovel')))

module.exports = app