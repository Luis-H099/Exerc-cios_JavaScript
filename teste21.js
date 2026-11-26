const prompt = require("prompt-sync")();

console.clear();

let usuario = 1234
let senha = 9999

let usuario1 = Number(prompt("Digite o código do seu usuário: "))

if(usuario1 == usuario) {
    console.log("Usuário encontrado!")
    let senha1 = Number(prompt("Digite sua senha: "))
    if(senha1 == senha) {
        console.log("Acesso permitido!")
    } else {
        console.log("Acesso negado! Senha incorreta!")
    }
} else {
    console.log("Usuário não encontrado!")
}