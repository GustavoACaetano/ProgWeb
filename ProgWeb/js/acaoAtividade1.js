const nomesComidas = document.querySelectorAll('h2');
const comidas = new Array();
const lista = document.querySelector('ol');

nomesComidas.forEach(nomesComida => {
    comidas.push(nomesComida.textContent)
    const abc = document.createElement('a')
    abc.setAttribute('name', 'retornar')
    nomesComida.append(abc)
});

comidas.forEach(comida => {
    const linha = document.createElement('li');
    linha.innerHTML = '<a href="#'+ comida +'">' + comida + '</a>';
    lista.append(linha);
});

const retornarName = document.getElementsByName("retornar")

retornarName.forEach(cansei => {
    cansei.innerHTML = '<a href=#lista>Retornar</a>'
})
