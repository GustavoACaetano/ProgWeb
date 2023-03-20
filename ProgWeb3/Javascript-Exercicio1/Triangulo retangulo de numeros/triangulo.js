var tamanho = parseInt(prompt("Qual deve ser o tamanho do triângulo?"))
while(isNaN(tamanho)){
    var tamanho = parseInt(prompt("Qual deve ser o tamanho do triângulo?"))
}
const resposta = document.querySelector("#resposta")
let triangulo = "";
let ultimaLinha = "";
for(let i = 1; i < tamanho; i++){
    ultimaLinha += `${i} `;
    triangulo += ultimaLinha + "<br>" + "\n"
}
console.log(triangulo)
resposta.innerHTML = triangulo;