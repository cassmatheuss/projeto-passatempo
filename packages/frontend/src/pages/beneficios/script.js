const API_URL = 'http://127.0.0.1:3000';

const getTexto = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/texts/` + id);
    return response.data.text;
  } catch (error) {
    console.error("Erro ao buscar texto: ", error);
    throw error;
  }
};

function atualizarTexto(texto, idTag) {
  const elementoTexto = document.querySelector(idTag);
  if (elementoTexto) {
    elementoTexto.innerHTML = texto; 
  } else {
    console.warn("Elemento não encontrado!");
  }
}

async function AtualizarTextoBeneficiosLaranja() {
  try {
    const texto = await getTexto('beneficioslaranja');
    atualizarTexto(texto, '.carrosselComTexto .texto');
  } catch (error) {
    console.error("Erro ao atualizar o texto: ", error);
  }
}

async function AtualizarTextoBeneficiosJogoteca() {
  try {
    const texto = await getTexto('beneficiosjogoteca');
    atualizarTexto(texto, '.retangulo-amarelo .jogoteca .texto-jogoteca p');
  } catch (error) {
    console.error("Erro ao atualizar o texto: ", error);
  }
}

async function AtualizarTextoBeneficiosBrinquedos() {
  try {
    const texto = await getTexto('beneficiosbrinquedos');
    atualizarTexto(texto, '.retangulo-azul .brinquedos .texto-brinquedos p');
  } catch (error) {
    console.error("Erro ao atualizar o texto: ", error);
  }
}

async function AtualizarTextoBeneficiosOficinas() {
  try {
    const texto = await getTexto('beneficiosoficinas');
    atualizarTexto(texto, '.retangulo-vermelho .oficinas .texto-oficinas p');
  } catch (error) {
    console.error("Erro ao atualizar o texto: ", error);
  }
}

AtualizarTextoBeneficiosLaranja()
AtualizarTextoBeneficiosJogoteca()  
AtualizarTextoBeneficiosBrinquedos()
AtualizarTextoBeneficiosOficinas()