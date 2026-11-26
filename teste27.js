const prompt = require("prompt-sync")();

console.clear()

let i;
let n1 = Number.MIN_VALUE;

console.log("Para sair do programa digite 0")

do {
    i = Number(prompt("Digite um número: "));
    if(i > n1) 
        n1 = i
} while (i !== 0) 

console.log("O maior número digitado foi: " + n1)