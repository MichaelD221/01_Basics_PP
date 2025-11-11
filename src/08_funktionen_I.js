
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

 ausgabeNamen2("Kevin"); // Argument --> Daten für Parameter
 ausgabeNamen2("Klaus");
 ausgabeNamen2("Ibrahim");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo, " + firstName + "!");
}
