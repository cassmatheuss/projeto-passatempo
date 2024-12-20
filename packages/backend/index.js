const userController = require('./services/users/users.controller');
const textController = require('./services/texts/texts.controller');
const emailController = require('./services/email/email.controller');

const express = require('express')
const db = require('./config/db')
const cors = require('cors')

const app = express()
const port = 3000

app.use( cors() )
app.use(express.json());

app.use('/users', userController);
app.use('/texts', textController);
app.use('/email', emailController);

db()

app.listen(port, () => {
    console.log(`✅ Servidor rodando na porta ${port}`)
})

app.get('/', (req, res) => {
  res.send('Back-end da Jogoteca, online!')
})


module.exports = app
