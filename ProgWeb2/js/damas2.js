//Comecei a esquecer, então vou ler dnv e comentar tudo q já fiz

const tamanhoCelula = 4.3; //Define o tamanho que vai ser usado para célula

document.body.append(criaTabuleiro()); //Chama a funão de criar e coloca o tabuleiro no corpo da página

function criaTabuleiro(){
    const tamanho = 8; //Quantidade de células
    let tabela = document.createElement('table'); //Cria a tabela

    //Arrumando o CSS do tabuleiro
    tabela.style.borderStyle = 'solid'; 
    tabela.style.borderSpacing = 0;
    tabela.style.margin = 'auto';

    //O conjunto cria o tabuleiro
    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr'); //Cria a linha
        tabela.append(linha) //Coloca a linhana tabela
        for (let j = 0; j < tamanho; j++){
            let celula = document.createElement('td'); //Cria a célula
            linha.append(celula) //Coloca a célula na linha

            celula.style.width = `${tamanhoCelula}em`; //Define o tamanho da célula
            celula.style.height = `${tamanhoCelula}em`; //Define o tamanho da célula

            celula.setAttribute('id', `${i}${j}`) //Localização da célula

            if (i%2 == j%2){
                celula.style.backgroundColor = 'black'; //Seta o fundo preto
                celula.setAttribute('class', 'casas') //Coloca as células com a classe
                if (i*8 + j <= 24) { //Parte de cima do tabuleiro
                    celula.append(criaPeca('black', i, j)); //Chama a função pra criar peça, passa os parâmetros e coloca no tabuleiro
                } else if (i*8 + j >= 40){ //Parte de baixo do tabuleiro
                    celula.append(criaPeca('red', i, j)); //Chama a função pra criar peça, passa os parâmetros e coloca no tabuleiro
                }
            } else {
                celula.style.backgroundColor = 'white'; //Deixa o fundo branco e não faz mais nada pq não vou mexer com as casas brancas
            }
        }
    };
    return tabela //Retorna a tabela
};

function criaPeca(cor, i, j) {
    let imagem = document.createElement('img'); //Cria o elemento
    imagem.setAttribute('src', `img/${cor}.png`); //Indica a imagem e a cor
    imagem.setAttribute('width', `${70}em`); //Tamanho da imagem
    imagem.setAttribute('height', `${70}em`);
    imagem.setAttribute('draggable', 'true'); //Seta pra ser arrastável
    imagem.setAttribute('class', 'movel'); //Coloca em uma classe pra poder identificar as peças dps
    imagem.setAttribute('id', `${i}${j}${cor[0]}`); //ID: i é a horizontal, j é a vertical e cor[0] é a primeira letra da cor da peça
    return imagem; //Retorna a imagem
};

const pecas = document.querySelectorAll('.movel'); //Seleciona as peças pela classe

const casas = document.querySelectorAll('.casas'); //Seleciona as células pela classe

function movePeca(){
    pecas.forEach(imagem => {
        imagem.addEventListener('dragstart', () => {
            imagem.setAttribute('class', 'movendo'); //início do arrastar seta a classe do objeto pra movendo
        });
        imagem.addEventListener('dragend', () => { 
            imagem.removeAttribute('class', 'movendo'); //Parar de arrastar remove a classe
            });
    });

    casas.forEach(casa => {
        casa.addEventListener('dragover', e => {
            e.preventDefault();
            let pecaid = document.querySelector('.movendo').id; //id da peça
            let cor = pecaid[2]; //cor da peça pra identificar dps
            const casaid = casa.id; //id do quadrado
            const movendo = document.querySelector('.movendo'); //selecionar a peça que está selecionada
            if (casa.innerHTML == ''){ //Checa se tem alguma coisa dentro da caixa
                if(pecaid[1] - casaid[1] == 1 || pecaid[1] - casaid[1] == -1){
                    casa.append(movendo); //coloca a peça no tabuleiro
                    movendo.addEventListener('dragend', () => {
                        movendo.setAttribute('id', `${casaid}${cor}`); //seta o id da peça com o id atual da casa, agora atualizado com a cor
                    });
                };
            } else{
                if(pecaid[2] != casa.children[0].id[2]){
                    pecaSome = casa.children[0]

                    if (pecaid[0] - casa.children[0].id[0] == 1){
                        casaFrenteI = parseInt(pecaid[0]) - 2
                    } else if (pecaid[0] - casa.children[0].id[0] == -1){
                        casaFrenteI = parseInt(pecaid[0]) + 2
                    } else  {
                        console.log("Errado! ❌")
                    }
                    
                    if(pecaid[1] - casa.children[0].id[1] == 1){
                        casaFrenteJ = parseInt(pecaid[1]) - 2
                    } else if (pecaid[1] - casa.children[0].id[1] == -1){
                        casaFrenteJ = parseInt(pecaid[1]) + 2
                    } else  {
                        console.log("Errado! ❌")
                    }

                    casaFrenteID = casaFrenteI.toString() + casaFrenteJ.toString()
                    casaFrente = document.getElementById(`${casaFrenteID}`)

                    if (casaFrente.innerHTML == ''){
                        pecaSome = casa.children[0]
                        //pecaSome.style.display = "none" // Desavanece a peça
                        casa.removeChild(pecaSome) //Preferi por deletar a peça da casa para não ficar resquícios 
                    
                        movendo.setAttribute('id', `${casaid}${cor}`); //seta o id da peça com o id atual da casa, agora atualizado com a cor
                    }
                }
            };
        });
    });
};

movePeca()
