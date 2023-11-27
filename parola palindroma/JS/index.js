
// chiedere una parol all'utente
const parola = prompt("inserisci parola");
// console.log(parola);

// dichiarzione della funione controllo
let risultato = controllo();
console.log(risultato);

// verificare se parola inserita dall'utnte è palindroma o no
function controllo() {
    // mettere varibile inversa uguale a parola 
    let inversa = parola
    // dividere la parola e la mette in un array per far si che funzioni il reverse
    const divisioneString = inversa.split("")
    console.log(divisioneString);
    // invertire la parola ( inverte l'array)
    const reverseString = divisioneString.reverse()
    console.log(reverseString);
    // mettere tutti gli elementi dell'array ( le parole ) in una stringa ( è come togliere l'array)
    const unioneString = reverseString.join("")
    console.log(unioneString);
    // verificare se parola è palindroma o no
    if ( parola === unioneString) {
        return "è una parola palidroma"
    }else{
       return "non è una parola palindroma"
    }
}
