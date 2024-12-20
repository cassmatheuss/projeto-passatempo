const API_URL = "http://127.0.0.1:3000";

const verifyToken = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/users/token/${token}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao verificar o token.", error);
    return false;
  }
};

const deleteCookie = (name) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;Secure;SameSite=Strict`;
};

// Exemplo de uso ao clicar em um botão
document.getElementById("logoutButton").addEventListener("click", () => {
  deleteCookie("jwt_token");
  alert("Você foi deslogado!");
  window.location.href = "../login/index.html"; // Redireciona para a página de login
});

const getJWTToken = () => {
  const name = "jwt_token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return;
};

const checkTokenAndLoadPage = async () => {
  const token = getJWTToken();
  if (!token) {
    alert("Você precisa estar autenticado para acessar esta página.");
    window.location.href = "/login";
    return;
  }

  const isValidToken = await verifyToken(token);
  if (!isValidToken) {
    alert("Token inválido. Por favor, faça login novamente.");
    window.location.href = "/login";
    return;
  }

  document.body.style.display = "block";
};

document.body.style.display = "none";

document.addEventListener("DOMContentLoaded", async () => {
  await checkTokenAndLoadPage();

  const hamburger = document.getElementById("hamburger");
  const navList = document.getElementById("nav-list");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
    overlay.classList.toggle("active");
  });

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
};

const changeMail = async (newEmail) => {
  try {
    const response = await axios.put(`${API_URL}/email/emailprincipal`, {
      email: newEmail,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao setar email: ", error);
    throw error;
  }
};

const getTexto = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/texts/` + id);
    return response.data.text;
  } catch (error) {
    console.error("Erro ao buscar texto: ", error);
    throw error;
  }
};

window.onload = async function () {
  try {
    const emailFromService = await getMailService();
    const emailField = document.getElementById("email");
    emailField.value = emailFromService;
  } catch (error) {
    alert("Não foi possível carregar o e-mail.");
  }

  try {
    const texto = await getTexto("homejogoteca");
    const textoField = document.getElementById("homejogoteca");
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }

  try {
    const texto = await getTexto("sobrenosjogoteca");
    const textoField = document.getElementById("sobrenosjogoteca");
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }

  try {
    const texto = await getTexto("beneficioslaranja");
    const textoField = document.getElementById("containerlaranja");
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }

  try {
    const texto = await getTexto("beneficiosjogoteca");
    const textoField = document.getElementById("beneficiosjogoteca");
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }

  try {
    const texto = await getTexto("beneficiosbrinquedos");
    const textoField = document.getElementById("beneficiosbrinquedos");
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }

  try {
    const texto = await getTexto("beneficiosoficinas");
    const textoField = document.getElementById("beneficiosoficinas");
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }

  try {
    const texto = await getTexto("oficinacf");
    const textoField = document.getElementById("oficinacf");
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }

  try {
    const texto = await getTexto("containerazulcf");
    const textoField = document.getElementById("containerazulcf");
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }

  try {
    const texto = await getTexto("transferenciadoacao");
    const textoField = document.getElementById(
      "containerTransferenciaBancaria"
    );
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }

  try {
    const texto = await getTexto("containerChavePix");
    const textoField = document.getElementById("containerChavePix");
    textoField.value = texto;
  } catch (error) {
    alert("Não foi possível alterar o texto.");
  }
};

document
  .getElementById("form-email")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email");
    const emailValue = email.value;

    console.log("Formulário enviado");

    if (!emailValue) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      await changeMail(emailValue);
      alert("E-mail alterado para: " + emailValue);
    } catch (error) {
      alert("Não foi possível alterar o e-mail.");
    }
  });

const setTexto = async (id, texto) => {
  try {
    const response = await axios.put(`${API_URL}/texts/` + id, {
      text: texto,
    });
    return response.data.text;
  } catch (error) {
    console.error("Erro ao buscar texto: ", error);
    throw error;
  }
};

document
  .getElementById("form-homejogoteca")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("homejogoteca");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("homejogoteca", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });

document
  .getElementById("form-sobrenosjogoteca")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("sobrenosjogoteca");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("sobrenosjogoteca", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });

document
  .getElementById("form-containerlaranja")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("containerlaranja");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("beneficioslaranja", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });

document
  .getElementById("form-beneficiosjogoteca")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("beneficiosjogoteca");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("beneficiosjogoteca", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });

document
  .getElementById("form-beneficiosbrinquedos")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("beneficiosbrinquedos");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("beneficiosbrinquedos", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });

document
  .getElementById("form-beneficiosoficinas")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("beneficiosoficinas");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("beneficiosoficinas", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });

document
  .getElementById("form-oficinacf")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("oficinacf");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("oficinacf", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });

document
  .getElementById("form-containerazulcf")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("containerazulcf");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("containerazulcf", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });

document
  .getElementById("form-containerTransferenciaBancaria")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("containerTransferenciaBancaria");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("transferenciadoacao", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });

document
  .getElementById("form-containerChavePix")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const texto = document.getElementById("containerChavePix");
    const textoValue = texto.value;

    console.log("Formulário enviado");

    if (!textoValue) {
      alert("Por favor, insira um texto válido.");
      return;
    }

    try {
      await setTexto("containerChavePix", textoValue);
      alert("Texto alterado.");
    } catch (error) {
      alert("Não foi possível alterar o texto.");
    }
  });
