let requisicao = fetch("https://viacep.com.br/ws/01001000/json/")
.then(resposta => resposta.json())

console.log(requisicao)
