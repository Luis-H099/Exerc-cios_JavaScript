const prompt = require("prompt-sync")();

console.clear();

let tipo = prompt("O que deseja comprar [A] Álcool [G] Gasolina: ").toUpperCase();

let quantidade = Number(prompt("Quantos litros de combustível irá comprar?: "));

let VD;
let VT;

if (tipo == "A") {

    if (quantidade <= 20) {

        VD = 2.90 - (2.90 * 0.03);
        VT = quantidade * VD;

        console.log("Valor a pagar: R$", VT.toFixed(2));

    } else {

        VD = 2.90 - (2.90 * 0.05);
        VT = quantidade * VD;

        console.log("Valor a pagar: R$", VT.toFixed(2));
    }

} else {

    if (quantidade <= 20) {

        VD = 3.60 - (3.60 * 0.04);
        VT = quantidade * VD;

        console.log("Valor a pagar: R$", VT.toFixed(2));

    } else {

        VD = 3.60 - (3.60 * 0.06);
        VT = quantidade * VD;

        console.log("Valor a pagar: R$", VT.toFixed(2));
    }
}