
let ageString = prompt("Insert you age!")
let age = Number(ageString) // Se voglio passare da stringhe a numeri DEVO convertire il tipo
//        ^ per farlo uso questa funzione Number CON LA N MAIUSCOLA


if (age >= 18) {
  // Questo blocco viene eseguito solo se la condizione risulta true, cioè se è vera
  document.write("Sei maggiorenne, benvenuto!")
} else {
  // Questo blocco viene esguito solo se la condizione risulta false, cioè se è falsa
  let difference = 18 - age
  document.write(`Sei minorenne, torna tra ${difference} anni!`)
  // document.write("Sei minorenne, torna tra " + difference + " anni!") // Stessa cosa
}

// age >= 18  è una condizione, cioè un'operazione logica/di confronto
// Ne abbiamo molti altri di operatori logici
// >  <  >=  <=

// Se noi mettiamo assieme più condizioni in AND (in JS AND si scrive &&)
// allora il risultato sarà true solo se sono tutte true
console.log( 18 >= 30 && 90 < 100 )

// Se noi mettiamo assieme più condizioni in OR (in JS OR si scrive ||)
// allora il risultato sarà true se almeno una è true
console.log( 18 >= 30 || 90 < 100 )


console.log(12 == 12) // Il risultato sarà true
console.log(12 === 12) // Il risultato sarà true
// Qual è la differenza tra questi due?


console.log('12' == 12)  // Questa cosa risulta true, e questo è un RISCHIO
// Perché rischiamo di pensare che ci sia un numero dove invece c'è una stringa
// e quindi rischiamo di trovarci NaN al posto di un numero, prima o poi

// IL MODO CORRETTO DI CHIEDERSI SE DUE COSE SONO UGUALI IN JS È:
console.log('12' === 12) // In questo caso, risulta false - ed è corretto che sia così.
// Non mischiamo pere con mele se possibile :)
