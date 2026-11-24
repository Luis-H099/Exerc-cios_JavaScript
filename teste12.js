const prompt = require("prompt-sync")();

console.clear()

let idade = prompt("Digite sua idade: ");

if(idade < 18) {
    console.log("Você não pode entrar no site!")
} else {
    console.log("Bem vindo ao Site!")
}