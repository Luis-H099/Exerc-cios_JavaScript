const prompt = require("prompt-sync")();

console.clear()

let n1 = Number(prompt("Digite o primerio número: "))
let n2 = Number(prompt("Digite o segundo número: "))

if(n1 > n2) {
    console.log("O primeiro número é maior!")
} else if(n1 == n2){
    console.log("Os dois números são iguais!")
} else {
    console.log("O segundo número é maior!")
}