const UserService = require("./users.service");
const express = require('express')

const router = express.Router();

const userService = new UserService()

router.post('/', async (req, res) => {
    try {
      await userService.create(req.body)
      res.status(201).json(`Usuário ${req.body.username} criado com sucesso!`)
    } catch (error) {
      res.status(404).send('Ocorreu um erro inesperado.');
    }
});

module.exports = router;