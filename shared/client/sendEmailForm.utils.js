const axios = require('axios')
const getMailService = require("./getMailService.utils")
API_URL = process.env.API_URL

const sendEmailForm = async ({
  nome_escola,
  endereco,
  telefone_escola,
  email_escola,
  nome_representante,
  cargo_representante,
  telefone_representante,
  email_representante,
}) => {
  try {
    const response = await axios.post(`${API_URL}/email/send`, {
      email: await getMailService(),
      nome_escola: nome_escola,
      endereco: endereco,
      telefone_escola: telefone_escola,
      email_escola: email_escola,
      nome_representante: nome_representante,
      cargo_representante: cargo_representante,
      telefone_representante: telefone_representante,
      email_representante: email_representante
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao enviar email: ", error);
    throw error;
  }
}

module.exports = sendEmailForm