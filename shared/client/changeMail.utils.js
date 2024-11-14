const axios = require('axios')
const validator = require("email-validator");
API_URL = process.env.API_URL

const changeMail = async (newEmail) => {
  try {
    if(validator.validate(newEmail)) {
      const response = await axios.put(`${API_URL}/email/emailprincipal`, {
        email: newEmail
      });
      return response.data;
    }
    else {
      throw new Error("E-mail inválido");
    }
  } catch (error) {
    console.error("Erro ao setar email: ", error);
    throw error;
  }
}

module.exports = changeMail