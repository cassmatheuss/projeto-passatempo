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

async function AtualizarTextoComoFuncionaOficina() {
  try {
    const texto = await getTexto('oficinacf');
    atualizarTexto(texto, '#texto-oficinacf');
  } catch (error) {
    console.error("Erro ao atualizar o texto: ", error);
  }
}

async function AtualizarTextoComoFuncionaContainerAzul() {
  try {
    const texto = await getTexto('containerazulcf');
    atualizarTexto(texto, '#texto-containerazulcf');
  } catch (error) {
    console.error("Erro ao atualizar o texto: ", error);
  }
}

AtualizarTextoComoFuncionaOficina()
AtualizarTextoComoFuncionaContainerAzul()