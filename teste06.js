const prompt = require("prompt-sync")();

let A = Number(prompt("Digite a distância da viagem em Kilometros: "))
let B = Number(prompt("Digite em quantas horas você terminou o trajeto: "))

let Km = A / B
let Ms = Km / 3.6

console.log("A média de velocidade foi " + Km + "Km/h")
console.log("A velocidade média em metros por segundo é: " + Ms)
