const prompt = require("prompt-sync")();

console.clear()

let M1 = 0
let M2 = 0


let A = Number(prompt("Digite o primeiro número: "))
let B = Number(prompt("Digite o segundo número: "))
let C = Number(prompt("Digite o terceiro número: "))

if(A > B) {
    if(B > C) {
        M1 = A
        M2 = B
    } else {
        M1 = C
        M2 = A
    }
} else {
    if(A > C) {
        M1 = B
        M2 = A
    } else {
        M1 = B
        M2 = C
    }
}

let soma = M1 + M2

console.log(soma)