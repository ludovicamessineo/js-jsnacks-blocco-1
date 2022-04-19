// jsnack4. Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Chiedo all'utente un numero di 4 cifre
const userNumber = parseInt(prompt("Dimmi un numero di 4 cifre"));
console.log(userNumber);

// Scompongo il numero 
const singleNumbers = Array.from(String(userNumber), Number);
console.log(singleNumbers);

// Faccio la somma
let sum = 0;
for (let i = 0; i < singleNumbers.length; i++) {
    sum += singleNumbers[i];
}

console.log(sum);
