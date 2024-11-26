const API_URL = 'http://127.0.0.1:3000';

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
        console.error("Erro ao fazer login:", error);
        throw error;
    }
};

const setCookie = (name, value, days = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;Secure;SameSite=Strict`;
};

document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const usuario = document.querySelector('[name="usuario"]').value;
    const senha = document.querySelector('[name="senha"]').value;

    try {
        const token = await login(usuario, senha);
        console.log('Token de Login:', token);
        
        setCookie('jwt_token', token);
        
        alert('Login bem-sucedido!');
        window.location.href = '../admin/index.html';
    } catch (error) {
        alert('Erro ao fazer login, verifique seus dados!');
    }
});
