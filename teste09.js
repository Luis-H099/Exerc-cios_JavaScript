const prompt = require("prompt-sync")();

let A = Number(prompt("Digite um valor A: "))
let B = Number(prompt("Digite um valor B: "))
let C = (A + B) * (A + B)

console.log("O resultado foi: " + C)