
/***** Codechallenge III *****/

// ControlFlow / Funktionen

// Erstellen Sie ein JS-Programm, dass einen Bestellvorgane bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/

const prompt = require('prompt-sync')({sigint: true});

let food, drink, decision;

burger()

function burger()
{
    console.log("Herzlich Willkommen bei McDonalds - Ihre Bestellung bitte!");
    console.log("Möchten Sie einen Hamburger (1), einen Cheeseburger (2) oder einen Chilliburger (3)?");
    decision = prompt("Geben Sie die dazugehörige Ziffer ein: ");
    const cond = true;
    switch (cond) {
        case (decision == 1):
            food = "Hamburger"; 
            break;
        case (decision == 2):
            food = "Cheeseburger"; 
            break;
        case (decision == 3):
            food = "Chilliburger"; 
            break;
        default:
            food = " ";
            break;
    }

}

getränk()

function getränk()
{
    console.log("Möchten Sie ein Getränk?");
    decision = prompt("j/n?: ");
    const cond = true;

    if(decision == "j")
    {
        decision = prompt("Möchten Sie Cola (1), Fanta (2) oder Sprite (3)?: ");
        switch (cond) 
        {
            case (decision == 1):
                drink = "Cola";
                break;
            case (decision == 2):
                drink = "Fanta";
                break;
            case (decision == 3):
                drink = "Sprite";
                break;
            default:
                drink = " ";
                break;
        }
    }
    else
    {
        drink = " ";
    }
}

console.log("Ihre Bestellung: " + food + " / " + drink);
console.log("Vielen Dank und auf Wiedersehen");



// const prompt = require('prompt-sync')({sigint: true});

// let food = "";
// let drink = "";
// let wahl

// console.log("Guten Tag bei MD, Ihre Bestellung bitte!");
// console.log("Hamburger (1), Cheeseburger (2) oder Chilliburger (3)?");

// wahl = prompt("Bitte Nummer eingeben:");

// switch (wahl) {
//   case "1":
//     food = "Hamburger";
//     break;
//   case "2":
//     food = "Cheeseburger";
//     break;
//   case "3":
//     food = "Chilliburger";
//     break;
//   default:
//     food = " ";
// }

// wahl = prompt("Möchten Sie ein Getränk dazu bestellen? (j/n)");

// if (wahl === "j") {
//   console.log("Cola (1), Fanta (2), Sprite (3)?");
//   wahl = prompt("Bitte Nummer eingeben:");

//   switch (wahl) {
//     case "1":
//       drink = "Cola";
//       break;
//     case "2":
//       drink = "Fanta";
//       break;
//     case "3":
//       drink = "Sprite";
//       break;
//     default:
//       drink = " ";
//   }
//   console.log("Hier ist Ihre Bestellung: " + food + " / " + drink);
// } else {
//   console.log("Hier ist Ihre Bestellung: " + food);
// }

// console.log("Vielen Dank, und Auf Wiedersehen!");