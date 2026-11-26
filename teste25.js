const prompt = require("prompt-sync")();

console.clear()


let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let num3 = Number(prompt("Digite o terceiro número: "));

let maior, meio, menor;

if (num1 > num2 && num1 > num3) {
    maior = num1;

    if (num2 > num3) {
        meio = num2;
        menor = num3;
    } else {
        meio = num3;
        menor = num2;
    }

} else if (num2 > num1 && num2 > num3) {
    maior = num2;

    if (num1 > num3) {
        meio = num1;
        menor = num3;
    } else {
        meio = num3;
        menor = num1;
    }

} else {
    maior = num3;

    if (num1 > num2) {
        meio = num1;
        menor = num2;
    } else {
        meio = num2;
        menor = num1;
    }
}

console.log("Ordem decrescente:");
console.log(maior, meio, menor);