const prompt = require("prompt-sync")();

console.clear()

let x = Number(prompt("Digite o primeiro número positivo inteiro: "))
let y = Number(prompt("Digite o segundo número positivo inteiro: "))

let r = 0

if(x > y) {
    let r = x ** y
    console.log("O resultado é: " + r)
} else if(x < y) {
    let r = y ** x
    console.log("O resultado é: " + r)
} else {
    let r = (x ** y) + (y ** x)
    console.log("O resultado é: " + r)
}