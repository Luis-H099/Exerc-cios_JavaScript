const prompt = require("prompt-sync")();

console.clear()

let S1 = Number(prompt("Quantas horas você trabalhou na primeira semana?: "))
let S2 = Number(prompt("Quantas horas você trabalhou na primeira semana?: "))
let S3 = Number(prompt("Quantas horas você trabalhou na primeira semana?: "))
let S4 = Number(prompt("Quantas horas você trabalhou na primeira semana?: "))
let VH = Number(prompt("Quanto você ganha por hora: "))

let HM = S1 + S2 + S3 + S4

if(HM < 161) {
    let ST = HM * VH
    console.log("O seu salário total é", ST)
} else {
    let ST = (VH * 160) + (((HM - 160) * VH) * 1.5)
    console.log("O seu salário total é", ST)
}

