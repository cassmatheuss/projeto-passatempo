const axios = require('axios')
API_URL = process.env.API_URL

const login = async (user, pass) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, null, {
      params: {
        username: user,
        password: pass
      }
    });
    return response.data.token;
  } catch (error) {
    console.error("Erro ao fazer login.", error);
    throw error;
  }
}

module.exports = login
