const prompt = require("prompt-sync")();

console.clear()

let estado = prompt("Digite a sigla do estado que deseja ver seu nome por extenso: ")

switch (estado.toUpperCase()) {
    case "AC":
        console.log("Acre");
        break;

    case "AL":
        console.log("Alagoas");
        break;

    case "AP":
        console.log("Amapá");
        break;

    case "AM":
        console.log("Amazonas");
        break;

    case "BA":
        console.log("Bahia");
        break;

    case "CE":
        console.log("Ceará");
        break;

    case "ES":
        console.log("Espírito Santo");
        break;

    case "GO":
        console.log("Goiás");
        break;

    case "MA":
        console.log("Maranhão");
        break;

    case "MT":
        console.log("Mato Grosso");
        break;

    case "MS":
        console.log("Mato Grosso do Sul");
        break;

    case "MG":
        console.log("Minas Gerais");
        break;

    case "PA":
        console.log("Pará");
        break;

    case "PB":
        console.log("Paraíba");
        break;

    case "PR":
        console.log("Paraná");
        break;

    case "PE":
        console.log("Pernambuco");
        break;

    case "PI":
        console.log("Piauí");
        break;

    case "RJ":
        console.log("Rio de Janeiro");
        break;

    case "RN":
        console.log("Rio Grande do Norte");
        break;

    case "RS":
        console.log("Rio Grande do Sul");
        break;

    case "RO":
        console.log("Rondônia");
        break;

    case "RR":
        console.log("Roraima");
        break;

    case "SC":
        console.log("Santa Catarina");
        break;

    case "SP":
        console.log("São Paulo");
        break;

    case "SE":
        console.log("Sergipe");
        break;

    case "TO":
        console.log("Tocantins");
        break;

    case "DF":
        console.log("Distrito Federal");
        break;

    default:
        console.log("Sigla inválida");
}