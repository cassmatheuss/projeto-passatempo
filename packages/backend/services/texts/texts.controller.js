const TextService = require("./texts.service");
const express = require('express')

const router = express.Router();

const textService = new TextService()

//Criar texto
router.post('/', async (req, res) => {
    try {
      await textService.create(req.body)
      res.status(201).json(`Texto ${req.body.id} criado com sucesso!`)
    } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
    }
});

// Listar todos os textos
router.get('/', async (req, res) => {
  try {
    const texts = await textService.findAll()
    res.status(200).json(texts)
  } catch (error) {
    res.status(500).send('Ocorreu um erro inesperado.');
  }
})

// Listar texto por id
router.get('/:id', async (req, res) => {
  try {
      const text = await textService.findOne(req.params.id);
      if (!text) {
          return res.status(404).send('Texto não encontrado.');
      }
      res.status(200).json(text);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});

// Remover texto por id
router.delete('/:id', async (req, res) => {
  try {
      const text = await textService.findOne(req.params.id);
      if (!text) {
          return res.status(404).send('Texto não encontrado.');
      }
      await textService.remove(req.params.id);
      res.status(200).json(`Texto ${req.params.id} removido com sucesso!`);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});

// Atualizar texto por id
router.put('/:id', async (req, res) => {
  try {
      const updatedText = await textService.update(req.params.id, req.body.text);
      if (!updatedText) {
          return res.status(404).send('Texto não encontrado.');
      }
      res.status(200).json(`Texto ${req.params.id} atualizado com sucesso!`);
  } catch (error) {
      res.status(500).send('Ocorreu um erro inesperado.');
  }
});


module.exports = router;