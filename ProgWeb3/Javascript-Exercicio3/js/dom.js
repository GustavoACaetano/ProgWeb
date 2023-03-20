const botaoAluno = document.getElementById("aluno");
const botaoProfessor = document.getElementById("professor");
const botaoCriarAluno = document.getElementById("criar-aluno");
const botaoCriarProfessor = document.getElementById("criar-professor");
const divMaiorProfessor = document.getElementById("div-professor")
const divMaiorAluno = document.getElementById("div-aluno")

divMaiorAluno.style.display = "none"
divMaiorProfessor.style.display = "none"

botaoAluno.addEventListener("click", e =>{
    if (divMaiorProfessor.style.display == "block"){
        divMaiorProfessor.style.display = "none";
    }
    if (divMaiorAluno.style.display == "none"){
        divMaiorAluno.style.display = "block";
    } else {
        divMaiorAluno.style.display = "none";
    }
})

botaoProfessor.addEventListener("click", e =>{
    if (divMaiorAluno.style.display == "block"){
        divMaiorAluno.style.display = "none";
    }
    if (divMaiorProfessor.style.display == "none"){
        divMaiorProfessor.style.display = "block";
    } else {
        divMaiorProfessor.style.display = "none";
    }
})

botaoCriarAluno.addEventListener("click", e =>{
    nomeAluno = prompt('Digite o nome do aluno:')
    divAluno = document.createElement("div")
    divAluno.textContent = 'ALUNO: ' + nomeAluno.toUpperCase()
    divAluno.classList.add("divAluno")
    botaoCriarAluno.parentElement.prepend(divAluno)
})

botaoCriarProfessor.addEventListener("click", e =>{
    nomeProfessor = prompt('Digite o nome do professor:')
    divProfessor = document.createElement("div")
    divProfessor.textContent = 'PROFESSOR: ' + nomeProfessor.toUpperCase()
    divProfessor.classList.add("divProfessor")
    botaoCriarProfessor.parentElement.prepend(divProfessor)
})