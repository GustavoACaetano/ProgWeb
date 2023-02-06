function criarBotoes(titulo){
    const botaoMais = document.createElement('button');
    const botaoMenos = document.createElement('button');
    
    botaoMais.setAttribute('id', 'aumentar')
    botaoMenos.setAttribute('id', 'diminuir')

    botaoMais.setAttribute('onclick', 'aumentarTitulo()')
    botaoMenos.setAttribute('onclick', 'diminuirTitulo()')

    botaoMais.textContent = 'Aumentar';
    botaoMenos.textContent = 'Diminuir';

    titulo.append(botaoMais);
    titulo.append(botaoMenos);
};

if (document.querySelector('h1') != null){
    const titulo = document.querySelector('h1');
    titulo.setAttribute('id', 'tituloH');
    criarBotoes(titulo);
} else if (document.querySelector('h2') != null){
    const titulo = document.querySelector('h2');
    titulo.setAttribute('id', 'tituloH');
    criarBotoes(titulo);
} else if (document.querySelector('h3') != null){
    const titulo = document.querySelector('h3');
    titulo.setAttribute('id', 'tituloH');
    criarBotoes(titulo);
} else if (document.querySelector('h4') != null){
    const titulo = document.querySelector('h4');
    titulo.setAttribute('id', 'tituloH');
    criarBotoes(titulo);
} else if (document.querySelector('h5') != null){
    const titulo = document.querySelector('h5');
    titulo.setAttribute('id', 'tituloH');
    criarBotoes(titulo);
} else if (document.querySelector('h6') != null){
    const titulo = document.querySelector('h6');
    titulo.setAttribute('id', 'tituloH');
    criarBotoes(titulo);
} else {
    alert('Não tem tag "<h?></h?>"❌');
};

const titulo = document.querySelector('#tituloH')

window.onload = () => {
    titulo.style.fontSize = `30px`
};

function diminuirTitulo(){
    let tamanhoFonte = 0

    if (titulo.style.fontSize.length == 4){
        tamanhoFonte = titulo.style.fontSize[0] + titulo.style.fontSize[1]
    } else if (titulo.style.fontSize.length == 5){
        tamanhoFonte = titulo.style.fontSize[0] + titulo.style.fontSize[1] + titulo.style.fontSize[2]
    }

    tamanhoFonte = parseInt(tamanhoFonte)

    if (tamanhoFonte > 10){
        tamanhoFonte = tamanhoFonte - 5
    } else {
        alert('Tamanho mínimo atingido! 🔍')
    }
    titulo.style.fontSize = `${tamanhoFonte}px`
}

function aumentarTitulo(){
    let tamanhoFonte = 0

    if (titulo.style.fontSize.length == 4){
        tamanhoFonte = titulo.style.fontSize[0] + titulo.style.fontSize[1]
    } else if (titulo.style.fontSize.length == 5){
        tamanhoFonte = titulo.style.fontSize[0] + titulo.style.fontSize[1] + titulo.style.fontSize[2]
    }

    tamanhoFonte = parseInt(tamanhoFonte)
    
    if (tamanhoFonte < 100){
        tamanhoFonte = tamanhoFonte + 10
    } else {
        alert('Tamanho máximo atingido! 🔍')
    }
    titulo.style.fontSize = `${tamanhoFonte}px`
}
