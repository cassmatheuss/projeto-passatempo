const axios = require('axios')
API_URL = process.env.API_URL

const getText = async (textId) => {
  try {
    const response = await axios.get(`${API_URL}/texts/` + textId);
    return response.data.text;
  } catch (error) {
    console.error("Erro ao buscar texto.", error);
    throw error;
  }
}

module.exports = getText