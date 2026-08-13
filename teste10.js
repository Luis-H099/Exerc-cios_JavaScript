const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let sobrenome = prompt("Digite seu sobrenome: ");

let nomeCompleto = nome + " " + sobrenome;

console.log("Nome completo: " + nomeCompleto);