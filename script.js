async function buscarEndereco(cep) {
    const mensagemErro = document.getElementById("erro");
    mensagemErro.innerHTML = "";
    try {
    let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let consultaCEPConvertida = await consultaCEP.json();
    if (consultaCEPConvertida.erro) {
        throw Error("CEP NÃO EXISTE!")
    }
    const cidade = document.getElementById("cidade");
    const logradouro = document.getElementById("endereco");
    const estado = document.getElementById("estado");
    console.log(consultaCEPConvertida);

    cidade.value = consultaCEPConvertida.localidade;
    logradouro.value = consultaCEPConvertida.logradouro;
    estado.value = consultaCEPConvertida.uf;
    
    return consultaCEPConvertida;
    }
    catch(erro) {
        mensagemErro.innerHTML = "<p>CEP inválido, tente novamente.</p>"
        console.log("What: " + erro);
        
    }
    
}

const cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscarEndereco(cep.value));