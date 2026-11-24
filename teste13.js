const prompt = require("prompt-sync")();

console.clear()

let N = Number(prompt("Digite um número e descubra se é positivo ou negativo: "))

if(N > 0) {
    console.log("É positivo");
} else {
    console.log("É negativo");
}
