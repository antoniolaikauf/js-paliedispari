// chiedere a utente due prompt uno e per scegliere se pari o dispari 
// l'altro è per il numero 

let sceltaNumero= parseInt(prompt("scegli numero tra 1 e 5"));
// console.log(sceltaNumero);
let choice = prompt("scegli tra pari o dispari");
// console.log(choice);
// variabili del valore massimo e minimo di scelta
let max= 5;
let min = 1;
// creaione numero random
function randomNumber() {
    let random = Math.floor(Math.random() * max) + min;
    return  random
}

let numero = randomNumber();
console.log(numero);