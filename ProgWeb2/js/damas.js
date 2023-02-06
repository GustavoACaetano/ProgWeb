const tamanhoCelula = 4.3;

document.body.append(criaTabuleiro());

function criaTabuleiro(){
    const tamanho = 8;
    let tabela = document.createElement('table');

    tabela.style.borderStyle = 'solid';
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr');
        tabela.append(linha)
        for (let j = 0; j < tamanho; j++){
            let celula = document.createElement('td');
            linha.append(celula)

            celula.style.width = `${tamanhoCelula}em`;
            celula.style.height = `${tamanhoCelula}em`;

            celula.setAttribute('id', `${i}${j}`)

            if (i%2 == j%2){
                celula.style.backgroundColor = 'black';
                celula.setAttribute('class', 'casas')
                if (i*8 + j <= 24) {
                    celula.append(criaPeca('black', i, j));
                } else if (i*8 + j >= 40){
                    celula.append(criaPeca('red', i, j));
                }
            } else {
                celula.style.backgroundColor = 'white';
            }
        }
    };
    return tabela
};

function criaPeca(cor, i, j) {
    let imagem = document.createElement('img');
    imagem.setAttribute('src', `img/${cor}.png`);
    imagem.setAttribute('width', `${70}em`);
    imagem.setAttribute('height', `${70}em`);
    imagem.setAttribute('draggable', 'true');
    imagem.setAttribute('class', 'movel');
    imagem.setAttribute('id', `${i}${j}`);
    return imagem;
};

const pecas = document.querySelectorAll('.movel');

const casas = document.querySelectorAll('.casas');

function movePeca(){
    pecas.forEach(imagem => {
        imagem.addEventListener('dragstart', () => {
            imagem.setAttribute('class', 'movendo');
        });
        imagem.addEventListener('dragend', () => {
            imagem.removeAttribute('class', 'movendo');
            });
    });

    casas.forEach(casa => {
        casa.addEventListener('dragover', e => {
            e.preventDefault()
            let pecaid = document.querySelector('.movendo').id
            const casaid = casa.id
            const movendo = document.querySelector('.movendo')
            if (casa.innerHTML == ''){
                if(pecaid[1] - casaid[1] == 1 || pecaid[1] - casaid[1] == -1){
                    casa.append(movendo)
                    movendo.addEventListener('dragend', () => {
                        movendo.setAttribute('id', casaid)
                    });
                    
                };
            };
        });
    });
};

movePeca()
