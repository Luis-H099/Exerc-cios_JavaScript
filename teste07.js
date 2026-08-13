const prompt = require("prompt-sync")();

let data = prompt("Digite uma data no formato DD/MM/AAAA: ");

let dia = data.substring(0, 2);
let mes = data.substring(3, 5);
let ano = data.substring(6, 10);

let novaData = ano + "/" + mes + "/" + dia;

console.log("Data no formato AAAA/MM/DD: " + novaData);