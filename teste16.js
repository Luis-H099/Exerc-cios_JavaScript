const prompt = require("prompt-sync")();

console.clear()

console.log("-6 Maçãs compradas: 1,30R$ ===== +6 Maçãs compradas")
let q = Number(prompt("Digite a quantidade de maçãs compradas: "))

let valor = 0

if(q < 6) {
    valor = 1.30
} else {
    valor = 1
}

let total = q * valor

console.log("O total da compra é", total)