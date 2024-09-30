let requisicao = fetch("https://viacep.com.br/ws/01002324/json/")
.then(resposta => {
    console.log("Primeiro then (resposta json)");
    return resposta.json();
})
.then(r => {
    if (r.erro) {
        throw Error("O CEP é inexistente!");
    }
    else {
        console.log("No segundo then (CEP não é inexistente):");
        console.log(r);
    }
    
})
.catch(error => {
    console.log("No catch, quando foi usado o throw error");
    console.log(error)
});

console.log(requisicao)
