const prompt = require("prompt-sync")();

console.clear()

let QA = Number(prompt("Digite a quantidade atual em estoque: "))
let QMA = Number(prompt("Digite a quantidade Máxima em estoque: "))
let QMI = Number(prompt("Digite a quantidade Mínima em estoque: "))

let QME = (QMA + QMI) / 2

if(QA >= QME) {
    console.log("Não efetuar compra")
} else {
    console.log("Efetuar compra")
}