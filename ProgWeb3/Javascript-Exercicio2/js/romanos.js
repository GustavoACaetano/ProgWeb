const numerosNormais = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
const numerosRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
var numero = prompt("Digite o número:")
var existe = false;

for (let i = 0; i < numerosNormais.length; i++){
    if (numero == numerosNormais[i]){
        document.write(numerosRomanos[i])
        existe = true;
    }
}

if (!existe){
    document.write("O número não está na lista.")
}