const lista = document.querySelector('ul')

document.querySelector("#ddd").addEventListener("change", buscaDados)

function buscaDados(entrada){
    fetch(`https://brasilapi.com.br/api/ddd/v1/${entrada.target.value}`)
    .then(resposta => resposta.json())
    .then(dados => {
            criaLista(dados.cities)
        })
}

function criaLista(cidades){
    lista.innerHTML = "<ul></ul>"
    cidades.forEach(cidade => {
        const linha = document.createElement('li');
        linha.textContent = cidade;
        lista.append(linha);
    });
}
