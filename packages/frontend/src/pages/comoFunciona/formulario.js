document.getElementById('formulario').addEventListener('submit', async function (e) {
  e.preventDefault();

  try {
    const emailResponse = await axios.get(`${API_URL}/email/emailprincipal`);
    const emailEnvio = emailResponse.data.email;

    const data = {
      email: emailEnvio,
      nome_escola: document.getElementById('nome_escola').value,
      endereco: document.getElementById('endereco').value,
      telefone_escola: document.getElementById('telefone_escola').value,
      email_escola: document.getElementById('email_escola').value,
      nome_representante: document.getElementById('nome_representante').value,
      cargo_representante: document.getElementById('cargo_representante').value,
      telefone_representante: document.getElementById('telefone_representante').value,
      email_representante: document.getElementById('email_representante').value,
    };

    console.log('Dados coletados:', data);

    const response = await axios.post(`${API_URL}/email/send`, data, {
      headers: { 'Content-Type': 'application/json' },
    });

    console.log('Resposta do servidor:', response);
    alert('Formulário enviado com sucesso!');
    document.getElementById('formulario').reset();
  } catch (error) {
    console.error('Erro ao enviar:', error.response || error.message);
    alert('Erro ao enviar o formulário. Tente novamente.');
  }
});
