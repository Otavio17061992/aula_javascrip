var produto = "“Smartphone”";

switch(produto)
{
    case "Smartphone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}

var produto = "“Smartphone”";

switch(produto)
{
    case "Smartphone":
    case "Celular":
    case "Telefone":
        console.log("Produto: Smartphone");
        break;
    case "TV":
        console.log("Produto: TV");
        break;
    default:
        console.log("Produto inválido");
        break;
}

let videogame = 'wii';
let jogo = "";

switch
 (videogame) {
  
case
 'wii':
    
jogo
 = 'Super Mario Galaxy';
    break;
  
default
:
    jogo = 'Não temos jogos para seu console';
}

console.log(jogo);