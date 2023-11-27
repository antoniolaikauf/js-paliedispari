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
function choiceComputer() {
    let random = Math.floor(Math.random() * max) + min;
    return  random
}

let numero = choiceComputer();
console.log(numero);

// creazione funzione  calcolo
function calcolo() {
    let calcolo = sceltaNumero + numero;
    return calcolo
}
let risultatoCalcolo = calcolo();
console.log(risultatoCalcolo);

// vedere chi vince con la scelta pari da parte dell'utente
if (choice === "pari" && risultatoCalcolo % 2 === 0) {
    console.log("utente ha vinto");
}else if ( choice === "pari" ){
    console.log("utente ha perso e il computer ha vinto");
}

// vedere chi vince con la scelta dispari da parte dell'utente
if (choice === "dispari" && risultatoCalcolo % 2 === 1) {
    console.log("hai vinto");
} else if (choice === "dispari"){
    console.log("hai perso e il computer ha vinto");
}
