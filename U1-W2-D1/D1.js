/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
let letter = 'abcd'
console.log('Questa è una ' + typeof letter) // la console stamperà la sintassi che trovera dentro '',
let number = 20
console.log('Questa è un ' + typeof number) // non è tra '', ma abbiamo dato un valore numerico
let bool = true
console.log('Questa è un ' + typeof bool) // non sono né lettere né numeri, è un valore che dice semplicemente SI o NO, Vero o Falso
// let undefined  ''
console.log('Questa è un ' + typeof undefined) // valore indefinto, la scatola è vuota, non è presente all'interno del codice, in quanto l'ho commentata.
let nada = null
console.log('Questa è un ' + typeof nada) // valore appositamente assegnato, come nullo, vuoto

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName = 'Valter'
console.log('Piacere, il mio nome è ' + myName)

/* ESERCIZIO 3
Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma = 12 + 20
let risultato = somma
console.log(risultato)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = 'Walty' //ho assegnato un nuovo valore a myname, ed è ok perchè 'let' lo permette
const myNameisNotEditable = myName
//myNameisNotEditable = 'edoardo' non posso modificarlo perche ora, GRAZIE A 'CONST' è dentro una scatola di titanio, non posso più aprirla.
console.log(
  'Ho potuto cambiare nome in ' +
    myNameisNotEditable +
    ' solo perchè era una variabile (LET) e non una costante (CONST)'
)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione = 4 - x
console.log(sottrazione) // 4-12=-8

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1 = 'john'
let name2 = 'John'

console.log(name1 !== name2) //true perchè SONO DIVERSI
console.log(name1 === name2) // False perchè NON SONO UGUALI
