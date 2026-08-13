const prompt = require("prompt-sync")();

let A = Number(prompt("Digite o valor de A: "))
let B = Number(prompt("Digite o valor de B: "))

let C = A * A + B * B

console.log("O resultado é: " + C)