// Zeilenkommentar Strg + #

/**
 * 
 * Block-Kommentar
 * 
 * 
 * 
 */

/***** Variablen 01 *******/

// console.log("Hi!");
// console.log(Hi);

/* Deklaration + Wertzuweisung I */

// let firstName; // Deklaration (Definition)
// console.log(firstName); // Ausgabe
// firstName = "Max"; // Wertzuweisung | assignment
// console.log(firstName); // Ausgabe der Wertzuweisung
// let familyName = "Mütze"; // Deklaration & Wertzuweisung
// console.log("Hi, ich bin " + firstName + " " + familyName + "!"); // --> Hi, ich bin Max Mütze!

/*  
    Wertzuweisung II + Datentypen 
    JS ist ein untypisierte Sprache!
*/

// let test;

// /* undefined */
// console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
// console.log("Inhalt: " + test); // Ausgabe Inhalt
// console.log("----------------")
// /* defined string*/
// test = "hi"; // string
// console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
// console.log("Inhalt: " + test); // Ausgabe Inhalt
// console.log("----------------")
// /* defined number */
// test = 2; // number
// console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
// console.log("Inhalt: " + test); // Ausgabe Inhalt
// console.log("----------------")
// /* defined boolean */
// test = true; // boolean
// console.log("Datentyp: " + typeof test); // Ausgabe Datentyp
// console.log("Inhalt: " + test); // Ausgabe Inhalt
// console.log("----------------")

/* Variablen vs. Konstanten in JS */

// Variable
let test; // Variable : Deklaration
test = "hi"; // Wertzuweisung (Initialisierung)
test = "hello"; // Überschreiben
console.log("Inhalt: " + test); // Ausgabe 

// Konstante
const test2  = "Hi!"; // Deklaration + Wertzuweisung gemeinsam !
// test2 = "Hello"; // Laufzeit-Fehler !!| Taucht erst auf, sobald das Programm läuft
console.log("Inhalt: " + test2); // Ausgabe