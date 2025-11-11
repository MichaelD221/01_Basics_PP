
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufruf | call
// test();  // wird aufgerufen, obwohl vor Deklaration, weil hoisting

// Funktionsrumpf | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Kevin!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// call
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS, stays in VEGAS ...
    let firstName = "Karsten";
    console.log("Hallo, " + firstName + "!");
}

// console.log(firstName); // SCOPE!! Variable von außen nicht sichtbar, weil eingekapselt in "VEGAS"{}

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

//  ausgabeNamen2("Kevin"); // Argument --> Daten für Parameter
//  ausgabeNamen2("Klaus");
//  ausgabeNamen2("Ibrahim");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

// ausgabeNamen3("Max", "Mütze");
// ausgabeNamen3("Maxine", "Mützerich");

// Argumente werden von prompt() geliefert --> Input
// const prompt = require('prompt-sync')({sigint: true});
// ausgabeNamen3(prompt("Vorname: "), prompt("Name: "));


function ausgabeNamen3(firstName, familyName) { // Parameter
    console.log("Hallo, " + firstName + " " + familyName + "!");
}


/***** Funktionen 03a *****/  // refactoring = Maschine umbauen, übersichtliche usw., nach außen bleibt es aber gleich, der Kunde merkt nichts
// 03a. Vorbereitung -Trennen der Verantwortlichkeiten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle // Eduscho, alles bleibt wie es ist, aber Funktionalitäten und Verantwortlichkeiten trennen

// ausgabeNamenSRP("Max","Mütze");

function ausgabeNamenSRP(firstName, familyName) { // Parameter

    //1. Verantwortlichkeit/ 1st responsibility: string composing 
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!";

    //2nd responsibility: string output
    console.log(outputStr);

}

/***** Funktionen 03b *****/ 

// 1st responsibility: string composing 
output(getString("Max","Mütze")); // baut den String
output(getString("Maxine","Mützerich"));
const prompt = require('prompt-sync')({sigint: true});
output(getString(prompt("Vorname?: "),prompt("Name?: ")));


function getString(firstName,familyName) {
    const GAP = " ";
    let outputStr = "Hallo, " + firstName + GAP + familyName + "!";
    return outputStr; // Funktion - OUTPUT sendet Daten zum call
}

// 2nd responsibility: string output
// output("hi");
// output(2);
// output(true);
function output(outputData) { // Wrapper
    console.log(outputData); // wird das kommentiert, wird nachfolgender Text deaktiviert
}

