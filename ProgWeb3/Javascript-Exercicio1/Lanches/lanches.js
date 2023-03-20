let idadeAtual = window.prompt("Qual sua idade atual?");
let idadeMorte = window.prompt("Qual idade você vai morrer?");
let lanchesDiarios = window.prompt("Quantos lanches por dia?");
alert(`Você precisará de ${lanchesDiarios * (idadeMorte-idadeAtual) * 365} lanches para durar até a velhice de ${idadeMorte} anos.`);