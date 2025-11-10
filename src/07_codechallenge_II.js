/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6  // AND = && ; OR = || ; NOT = !
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

const prompt = require('prompt-sync')({sigint: true}); // required for prompts

let firstName, age;

firstName = prompt("Ihr Name lautet?: ");
age = parseInt(prompt("Ihr alter ist?: "));

console.log("Hallo " + firstName + ". Sie sind " + age + " Jahre alt.");

const cond = true; 

switch (cond) {
    case (age >= 0 && age < 6):
        console.log("Sie bekommen Milch.");
        break;
    case (age > 5 && age < 13):
        console.log("Sie bekommen Saft.");
        break;
    case (age > 12 && age < 18):
        console.log("Sie bekommen Cola.");
        break;
    case (age > 17):
        console.log("Sie bekommen Cola.");
        break;
    default:
        console.log("Ungültige Eingabe.");
        break;
}