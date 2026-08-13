async function buscarCEP() {
  const cep = prompt("Digite o CEP:");

  try {
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await resposta.json();

    if (dados.erro) {
      console.log("CEP não encontrado.");
      return;
    }

    console.log(`Rua: ${dados.logradouro}`);
    console.log(`Bairro: ${dados.bairro}`);
    console.log(`Cidade: ${dados.localidade}`);
    console.log(`Estado: ${dados.uf}`);
  } catch (erro) {
    console.log("Erro ao buscar o CEP:", erro);
  }
}

buscarCEP();