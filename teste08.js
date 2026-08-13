const prompt = require("prompt-sync")();

let N = prompt("Digite um número no formato CDU (Centena, Dezena e Unidade): ");

let centena = N.substring(0, 1);
let dezena = N.substring(1, 2);
let unidade = N.substring(2, 3);

let novoNumero = unidade + dezena + centena;

console.log("Número no formato UDC: " + novoNumero);