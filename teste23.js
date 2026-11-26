const prompt = require("prompt-sync")();

console.clear()

console.log("************************************************")
console.log("Calculadora para Operações com 2 números")
console.log("*************************************************")
console.log("1 - Soma")
console.log("2 - Subtração")
console.log("3 - Multiplicação")
console.log("4 – Divisão")
console.log("*************************************************")
let escolha = Number(prompt("Informe a Operação Matemática a ser realizada: "))

let n1 = Number(prompt("Digite o primeiro número: "))
let n2 = Number(prompt("Digite o segundo número: "))
let r = 0

switch (escolha) {
    case 1:
         r = n1 + n2;
        console.log("O resultado é: " + r);
        break;
        
    case 2:
         r = n1 - n2;
        console.log("O resultado é: " + r)
        break;
        
    case 3:
         r = n1 * n2;
        console.log("O resultado é: " + r)
        break;

    case 4:
         r = n1 / n2;
        console.log("O resultado é: " + r)
        break;
    
    default:
        console.log("Opção não encontrada!")
        break;
}