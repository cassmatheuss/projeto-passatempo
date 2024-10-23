const express = require('express')
const db = require('./config/db')
const cors = require('cors')

const app = express()
const port = 3000

app.use( cors() )

db()

app.listen(port, () => {
    console.log(`✅ Servidor rodando na porta ${port}`)
})

app.get('/', (req, res) => {
  res.send('Back-end da Jogoteca, online!')
})
