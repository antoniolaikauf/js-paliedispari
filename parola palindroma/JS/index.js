// chiedere una parol all'utente

const parola = prompt("inserisci parola");
// console.log(parola);

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
    // riunire parola e toglierla dall'array
    const unioneString = reverseString.join("")
    console.log(unioneString);
    // verificare se parola è palindroma o no
    if ( parola === unioneString) {
        console.log("è una parola palindroma");
    }else{
        console.log("non è una parola palindroma");
    }
}
controllo();
