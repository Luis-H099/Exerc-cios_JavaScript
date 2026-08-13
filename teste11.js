const prompt = require("prompt-sync")();

let A = Number(prompt("Digite o valor de A: "));
let B = Number(prompt("Digite o valor de B: "));
let C = Number(prompt("Digite o valor de C: "));
let D = Number(prompt("Digite o valor de D: "));

console.log("A + B = " + (A + B));
console.log("A * B = " + (A * B));

console.log("A + C = " + (A + C));
console.log("A * C = " + (A * C));

console.log("A + D = " + (A + D));
console.log("A * D = " + (A * D));

console.log("B + C = " + (B + C));
console.log("B * C = " + (B * C));

console.log("B + D = " + (B + D));
console.log("B * D = " + (B * D));

console.log("C + D = " + (C + D));
console.log("C * D = " + (C * D));