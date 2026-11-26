const prompt = require("prompt-sync")();

console.clear()

let fruta = prompt("Digite a fruta (laranja, maçã, morango ou uva): ");
let quantidade = Number(prompt("Digite a quantidade em Kg: "));

let precoKg;
let total;

fruta = fruta.toLowerCase();

if (fruta == "laranja") {
    if (quantidade <= 5) {
        precoKg = 1.98;
    } else {
        precoKg = 1.68;
    }

} else if (fruta == "maçã" || fruta == "maca") {
    if (quantidade <= 5) {
        precoKg = 1.80;
    } else {
        precoKg = 1.50;
    }

} else if (fruta == "morango") {
    if (quantidade <= 5) {
        precoKg = 2.50;
    } else {
        precoKg = 2.20;
    }

} else if (fruta == "uva") {
    if (quantidade <= 5) {
        precoKg = 5.98;
    } else {
        precoKg = 5.68;
    }

} else {
    console.log("Fruta inválida");
}

total = quantidade * precoKg;

if (quantidade > 8 || total > 25) {
    total = total * 0.90;
}

console.log("Valor a pagar: R$ " + total.toFixed(2));