const botaoMenu = document.getElementById("menu");
const listaDrop = document.getElementById("drop");
const botaoAutenticar = document.getElementById("autenticar");
const caixaTextoNome = document.getElementById("itNome");
const caixaTextoSenha = document.getElementById("itSenha");
const divSemNome = document.getElementById("div-sem-preencher-nome");
const divSemSenha = document.getElementById("div-sem-preencher-senha");
const divSenhaForaPadrao = document.getElementById("div-senha-fora-padrao");

//listaDrop.style.display = "none";

botaoMenu.addEventListener("click", e =>{
    if(listaDrop.style.display == "grid"){
        listaDrop.style.display = "none";
    } else {
        listaDrop.style.display = "grid";
    }
});

botaoAutenticar.addEventListener("click", e =>{
    if (caixaTextoNome.value == ""){
        divSemNome.style.display = "block";
        caixaTextoNome.style.borderColor = "red";
    } else {
        divSemNome.style.display = "none";
        caixaTextoNome.style.borderColor = "rgb(95, 201, 74)";
    }

    if (caixaTextoSenha.value == ""){
        divSemSenha.style.display = "block";
        divSenhaForaPadrao.style.display = "none";
        caixaTextoSenha.style.borderColor = "red";
    } else {
        divSemSenha.style.display = "none";
        if (caixaTextoSenha.value.length >= 6 && caixaTextoSenha.value.length <= 30) {
            divSenhaForaPadrao.style.display = "none";
            caixaTextoSenha.style.borderColor = "rgb(95, 201, 74)";
        } else {
            caixaTextoSenha.style.borderColor = "red";
            divSenhaForaPadrao.style.display = "block";

        }
    }
});