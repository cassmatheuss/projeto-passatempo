const axios = require('axios')
API_URL = process.env.API_URL

const getMailService = async () => {
  try {
    const response = await axios.get(`${API_URL}/email/emailprincipal`);
    return response.data.email;
  } catch (error) {
    console.error("Erro ao buscar email.", error);
    throw error;
  }
}

module.exports = getMailService