const UserService = require("./users.service");
const express = require('express')
const checkPassword = require('../../../../shared/checkPassword.utils')

const router = express.Router();

const userService = new UserService()

//Criar usuário
router.post('/', async (req, res) => {
    try {
      await userService.create(req.body)
      res.status(201).json(`Usuário ${req.body.username} criado com sucesso!`)
    } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
    }
});

// Listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await userService.findAll()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).send('Ocorreu um erro inesperado.');
  }
})

// Listar usuário por id
router.get('/:id', async (req, res) => {
  try {
      const user = await userService.findOne(req.params.id);
      if (!user) {
          return res.status(404).send('Usuário não encontrado.');
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});

// Remover usuário por id
router.delete('/:id', async (req, res) => {
  try {
      const user = await userService.findOne(req.params.id);
      if (!user) {
          return res.status(404).send('Usuário não encontrado.');
      }
      await userService.remove(req.params.id);
      res.status(200).json(`Usuário ${req.params.id} removido com sucesso!`);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});

// Atualizar usuário por id
router.put('/:id', async (req, res) => {
  try {
      const updatedUser = await userService.update(req.params.id, req.body);
      if (!updatedUser) {
          return res.status(404).send('Usuário não encontrado.');
      }
      res.status(200).json(`Usuário ${req.params.id} atualizado com sucesso!`);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});

router.post('/login', async (req, res) => {
  try {
    const username = req.query.username;
    const password = req.query.password;

    const users = await userService.findAll();
    
    const user = users.find(u => u.username === username);
    
    if (!user) {
      return res.status(404).send('Usuário não encontrado');
    }

    const passIsCorrect = await checkPassword(password, user.password_hash);

    if (passIsCorrect) {
      // jwt aqui
      return res.status(200).send('Login bem-sucedido');
    } else {
      return res.status(401).send('Usuário ou senha incorretos.');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Ocorreu um erro inesperado');
  }
});


module.exports = router;