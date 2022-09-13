// Ho una variabile che contiene un numero

let contatore = 1

// Voglio aggiungere 1 a questa varabile

contatore = contatore + 1 // A questo punto dentro contatore avrò 2
contatore = contatore + 1 // qua diventa 3
contatore = contatore + 1 // qua diventa 4

// Posso fare la stessa identica cosa con il +=
contatore += 1 // qua diventa 5
contatore += 1 // qua diventa 6
contatore += 3 // 9

contatore -= 20 // qua diventa -11
contatore *= -2 // qua diventa 22

console.log(contatore)

// Quando ho più modi di fare la stessa, alcuni più leggibili di altri
// sto rendendo il codice "più dolce", infatti si dice "zucchero sintattico"
// https://it.wikipedia.org/wiki/Zucchero_sintattico

// La stessa si può fare anche con -= *=
