const axios = require('axios')
API_URL = process.env.API_URL

const setText = async (textId, newText) => {
  try {
    await axios.put(`${API_URL}/texts/` + textId, {
      text: newText
    });
    return 'Texto ' + textId + ' alterado com sucesso.';
  } catch (error) {
    console.error("Erro ao buscar texto.", error);
    throw error;
  }
}

module.exports = setText

