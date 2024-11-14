const API_URL = 'http://127.0.0.1:3000';

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("nav-list");
    const overlay = document.getElementById("overlay");
  
    hamburger.addEventListener("click", () => {
      navList.classList.toggle("active"); // Ativa/desativa o menu
      overlay.classList.toggle("active"); // Ativa/desativa o overlay
    });
  
    // Fecha o menu se o usuário clicar no overlay
    overlay.addEventListener("click", () => {
      navList.classList.remove("active");
      overlay.classList.remove("active");
    });
  });
  

const getMailService = async () => {
    try {
        const response = await axios.get(`${API_URL}/email/emailprincipal`);
        return response.data.email;
    } catch (error) {
        console.error("Erro ao buscar email.", error);
        throw error;
    }
}

const changeMail = async (newEmail) => {
    try {
        const response = await axios.put(`${API_URL}/email/emailprincipal`, {
            email: newEmail
        });
        return response.data;
    }
    catch (error) {
        console.error("Erro ao setar email: ", error);
        throw error;
    }
}

window.onload = async function () {
    try {
        const emailFromService = await getMailService();
        const emailField = document.getElementById('email');
        emailField.value = emailFromService;
    } catch (error) {
        alert('Não foi possível carregar o e-mail.');
    }
};

document.getElementById('form-email').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email');
    const emailValue = email.value;

    console.log('Formulário enviado');

    if (!emailValue) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    try {
        await changeMail(emailValue);
        alert('E-mail alterado para: ' + emailValue); 
    } catch (error) {
        alert('Não foi possível alterar o e-mail.');
    }
});
