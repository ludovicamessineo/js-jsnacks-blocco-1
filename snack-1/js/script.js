// jsnack1. L'utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo all'utente due parole
const firstWord = prompt("Dimmi una parola");
const secondWord = prompt("Dimmi un'altra parola");

console.log(firstWord, secondWord);

// Calcolo la lunghezza delle due parole 
const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length

console.log(firstWordLength, secondWordLength);

// Stampo prima la parola più corta e poi la più lunga
let result
if (firstWordLength > secondWordLength) {
    result = `${secondWord} ${firstWord}`;
} else if (secondWordLength > firstWordLength) {
    result = `${firstWord} ${secondWord}`
} else {
    result = `Le parole hanno la stessa lunghezza ${firstWord} ${secondWord}`
}

console.log(result);