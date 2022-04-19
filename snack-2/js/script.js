// jsnack2. Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.

// Creo arrey vuoto
const numbers = []

// Con ciclo for chiedo all'utente di inserire un numero 6 volte
for (let i = 0; i < 6; i++) {
    const userNumber = parseInt(prompt("Dimmi un numero")) 
    console.log(userNumber);

    // Verifico se il numero è dispari e se lo è lo inserisco nell'array
    if (userNumber % 2 === 1) {
        numbers.push(userNumber);
    }
}

console.log(numbers);