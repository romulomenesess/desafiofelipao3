let nome = "Rômulo";
let idade = 20;
let _classe = "mago";


let mago = {
    nomeClasse1: "mago",
    ataqueMago: "magia",
    };

let guerreiro = {
    nomeClasse2: "guerreiro",
    ataqueGuerreiro: "espada",
    };

let monge = {
    nomeClasse3: "monge",
    ataqueMonge: "artes marciais",
    };

let ninja = {
    nomeClasse4: "ninja",
    ataqueNinja: "shuriken",
    };

function acaoPersonagem(_classe){
    if (_classe === "mago"){
        console.log("O " + mago.nomeClasse1 + " usou o ataque " + mago.ataqueMago)
        }
    else if (_classe === "guerreiro"){
        console.log("O " + guerreiro.nomeClasse2 + " usou o ataque " + guerreiro.ataqueGuerreiro)
        }
    else if (_classe === "monge"){
        console.log("O " + monge.nomeClasse3 + " usou o ataque " + monge.ataqueMonge)
        }
    else if (_classe === "ninja") {
        console.log("O " + ninja.nomeClasse4+ " usou o ataque " + ninja.ataqueNinja)
        }
    }

let contador = 0;
do {
    contador++;
    acaoPersonagem(_classe);
} while(contador <1);