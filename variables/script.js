
// Dichiaro una variabile
let variabile1; // Posso anche scrivere: var variabile1;
// MA var non si usa più, è stato sostituito da let - let
// funziona allo stesso modo, ma risolve alcuni problemi di var che
// vedremo meglio.

// Posso assegnare un valore alla mia variabile, mi basta usare il
// suo nome per farci riferimento
variabile1 = 13; // Uso l'operatore di assegnamento = per inserire 13 nella variabile

console.log(variabile1); // Stampo nella console il valore contenuto in variabile1

// Posso anche modificare il valore contenuto in una variabile, semplicemente
// assegnandone uno nuovo
variabile1 = 57;
console.log(variabile1);

// Se non dichiaro una variable, ma la uso - vedo che Visual Studio code
// mi avverte: stai unsando una variabile che non esiste
// variabile2 = 200;

// Se dichiaro una variabile con un nome che è già in uso...
// allora il programma va in errore.
// let variabile1; --> questa riga genererebbe un errore

// -----------------------

// Posso anche sommare stringhe, vengono concatenate (cioè affiancate senza spazio)

let nome = 'Paolo';
let cognome = 'Rossi';

console.log(nome + cognome);

console.log("Abbiamo dichiarato 3 variabili, i loro valori sono: " + variabile1 + " " + nome + " e " + cognome)
// Posso anche fare la stessa cosa così:

console.log(`Abbiamo dichiarato 3 variabili, i loro valori sono: ${variabile1} ${nome} e ${cognome}`)
// ^^ questa tecnica si chiama interpolazione di stringa, cioè "infilo" dei valori all'interno di una stringa
// Si può fare solo con stringhe dichiarate usando il backtick ` , non funziona in stringhe con doppi o singoli apici

// Se provo invece a fare operazioni che non posso fare tra numeri e stringhe
// o comunque tra tipi dove non ha senso, ottengo NaN, che sta per Not A Number.
// Quando vedo NaN, vuol dire che c'è un errore o qualcosa che non va in un calcolo matematico
console.log("Abbiamo dichiarato 3 variabili, i loro valori sono: " - variabile1)


// ------------------------------------------------------

// Volendo possiamo anche dichiarare e valorizzare una variabile nella stessa riga:
let variabile2 = 200;


// ------------------------------------------------------

// Uso const se so che questo valore non cambierà mai, ma comunque
// ho bisogno di salvarlo da qualche parte per usarlo poi più avanti nel programma,
// magari di usarlo più volte
const valoreCostante1 = 'Questa stringa non cambierà mai!'

console.log(valoreCostante1)

// Se provo a eseguire questo assegnamento, ho un errore:
// valoreCostante1 = `Un'altra stringa`

// Esempio, piGrego per fare calcoli su cerchi - pi grego non deve mai cambiare
const piGrego = 3.14

console.log(`L'area di un cerchio con raggio 2 è: ${ 2 * 2 * piGrego}`)
console.log(`La circonferenza di un cerchio con raggio 5 è: ${2 * 5 * piGrego}`)

// È molto comune usare una convenzione diversa per i nomi delle costanti, cioè
// snake_case ma tutto maiuscolo
const QUESTO_VALORE_NON_CAMBIA = 42

// -------------------------------------
// JavaScript è un linguaggio debolmente tipizzato,
// si dice anche che ha una tipizzazione dinamica (dynamically typed)

let variabile3; // Quando dichiaro la varibile non mi interessa che tipo di dato ci andrà...

variabile3 = 12332123;

// La variabile può contenere valori di qualsiasi tipo, e può cambiare tipo nel tempo
variabile3 = "Una stringa di testo"

// CONSIGLIO:
// siate "educati" e ordinati, non mischiate tipi di dato.
// Se in una variabile sapete che ci andrà un numero:
// 1) Gli date un nome sensato che faccia capire che è un numero -- ad esempio, primoNumero
// 2) State attenti a non metterci altri tipi di dato, perché può succedere che vi capitino errori

// --------------------------------------------------

// Null e Undefined
let variabile4;

console.log(variabile4)
// Se ho una variabile che non ho ancora riempito con un valore,
// allora conterrà undefined

// Uso null quando voglio, a un certo punto, svuotare la mia variabile -- ma magari
// più avanti gli assegnerò un nuovo valore.
// Posso vedere null come un RESET di una variabile - però è VOLUTO.
// Undefined è lì perché non ho ancora fatto nulla. Null, se c'è, è perché
// ho voluto io svuotare quella variabile.
variabile4 = 13;

variabile4 = null; // Ora questa variabile è vuota, cioè contiene null

variabile3 = 56;

// Se io DEVO esplicitamente svutare una variabile, uso sempre null.
// Undefined lo lascio a JavaScript
// Cioè, se trovo un undefined, so che "non è colpa mia", c'è perché ce l'ha messo JavaScript

