const EmailService = require("./email.service");
const express = require('express')

const router = express.Router();

const emailService = new EmailService()

//Criar email
router.post('/', async (req, res) => {
    try {
      await emailService.create(req.body)
      res.status(201).json(`Email ${req.body.id} criado com sucesso!`)
    } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
    }
});

// Listar todos os email
router.get('/', async (req, res) => {
  try {
    const emails = await emailService.findAll()
    res.status(200).json(emails)
  } catch (error) {
    res.status(500).send('Ocorreu um erro inesperado.');
  }
})

// Listar email por id
router.get('/:id', async (req, res) => {
  try {
      const email = await emailService.findOne(req.params.id);
      if (!email) {
          return res.status(404).send('Email não encontrado.');
      }
      res.status(200).json(email);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});

// Remover email por id
router.delete('/:id', async (req, res) => {
  try {
      const email = await emailService.findOne(req.params.id);
      if (!email) {
          return res.status(404).send('Email não encontrado.');
      }
      await emailService.remove(req.params.id);
      res.status(200).json(`Email ${req.params.id} removido com sucesso!`);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});

// Atualizar texto por id
router.put('/:id', async (req, res) => {
  try {
      const updatedEmail = await emailService.update(req.params.id, req.body.email);
      if (!updatedEmail) {
          return res.status(404).send('Email não encontrado.');
      }
      res.status(200).json(`Email ${req.params.id} atualizado com sucesso!`);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});

// Enviar email
router.post('/send', async (req, res) => {
  try {
      await emailService.sendEmailContato(req.body);
      res.status(200).json(`Email enviado com sucesso!`);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});

module.exports = router;