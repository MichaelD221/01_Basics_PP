

// // /*** Rechner */
// // /*
// // 0. a+b | a-b | a*b | a/b  --> Ergebnis c 

// // 1. Dateneingabe + -überprüfung :  check! / ????
// // 2. Auswahl Rechenart : check!
// // 3. Fkt. Grundrechenarten : check!
// // 4. Ausgabe in Konsole : check!
// // */

// // const ERROR_STR_DIV = "Teilen durch 0 nicht möglich";
// // const ERROR_STR_GEN = "Irgendwas ging schief!";

// // /** Dateneingabe */

// // const prompt = require('prompt-sync')({sigint: true});

// // startApp();

// // function startApp() {
// // 	output(calculator(getNum1(),getNum2(),getOp()));
// // }

// // function getNum1() {
// // 	return parseInt(prompt("Zahl1?: "));
// // }

// // function getNum2() {
// // 	return parseInt(prompt("Zahl2?: "));
// // }

// // function getOp() {
// // 	return prompt("OP?: ");
// // }




// // /** WAS soll gemacht werden? */

// // // module: calculator | tests:
// // // agreement : "+","-","*",":","/"
// // // output(calculator(3,2,"+"));
// // // output(calculator(3,2,"-"));
// // // output(calculator(3,2,"*"));
// // // output(calculator(3,2,":"));
// // // output(calculator(3,2,"/"));
// // // output(calculator(3,0,"/"));
// // // output(calculator(3,2,"#?!"));
// // function calculator(a, b, op) {

// // 	switch (op) {
// // 		case "+":
// // 			return add(a,b); // nach return wird eine Aktion abgebrochen, daher kein break danach nötig
// // 		case "-":
// // 			return subtract(a,b);
// // 		case "*":
// // 			return multiply(a,b);
// // 		case ":":
// // 		case "/":	
// // 			return divide(a,b);
// // 		default:
// // 			return ERROR_STR_GEN;
// // 	}
// // }


// // /** WIE sollen die Aufgeben gelöst werden? */

// // // / module: division a / b |  test:
// // // output(divide(4,2));
// // // output(divide(3,2));
// // // output(divide(3,-2));
// // // output(divide(0,2));
// // // output(divide(3,0));
// // // output(divide(0,0));
// // function divide(a,b) {

// // 	// 1. Iteration
// // 	// if (b == 0) {
// // 	// 	return "Teilen durch 0 nicht möglich!";
// // 	// } else {
// // 	// return a/b;
// // 	// }

// // 	// 2. Iteration
// // 	if (b == 0) {
// // 		return ERROR_STR_DIV;  // Ausnahme
// // 	} 
	
// // 	return a/b;  // Regel
	
// // }

// // // module: multiplication a * b |  test:
// // // output(multiply(3,2));
// // // output(multiply(3,-2));
// // // output(multiply(3,0));
// // function multiply(a,b) {
// // 	return  a * b;
// // }

// // // module: subtraction a - b |  test:
// // // output(subtract(3,2));
// // // output(subtract(3,-2));
// // // output(subtract(3,0));
// // // output(subtract(0,2));
// // function subtract(a,b) {
// // 	return a - b;
// // }

// // // module: addition a + b |  test:
// // // output(add(2,2));
// // // output(add(2,-2));
// // // output(add(2,0));
// // function add(a,b) {
// // 	return a + b;
// // }

// // // module: output | test:
// // // output("hello");
// // // output(2);
// // function output(outputData) {
// // 	console.log(outputData);
// // }
  











/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -überprüfung :  check! / ????
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const ERROR_STR_DIV = "Teilen durch 0 nicht möglich";
const ERROR_STR_GEN = "Ihr Operator ist ungültig! Prüfen Sie evtl. auch Ihre Zahlen.";
const B = "Bitte ";
const E = " eingeben: ";
const ERG = "Das Ergebnis lautet: ";
const NNAN = "Das Ergebnis ist ungültig, da Sie keine Zahl(en) eingegeben haben!";
const GRAT = "Herzlichen Glühstrumpf!";
const GRZ = "----------------------";
const OPR = " ( +  |  -  |  *  |  / oder : )";



/** Dateneingabe */

const prompt = require('prompt-sync')({sigint: true});

startApp();

function startApp() {
	output(calculator(getNum1(),getOp(),getNum2()));
}

function getNum1() {
	return parseInt(prompt(B + "erste Zahl" + E));
}

function getOp() {
	return prompt(B + "Operator" + OPR + E);
}

function getNum2() {
	return parseInt(prompt(B + "zweite Zahl" + E));
}






/** WAS soll gemacht werden? */

// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a, op, b) {

	switch (op) {
		case "+":
			return add(a,b); // nach return wird eine Aktion abgebrochen, daher kein break danach nötig
		case "-":
			return subtract(a,b);
		case "*":
			return multiply(a,b);
		case ":":
		case "/":	
			return divide(a,b);
		default:
			return ERROR_STR_GEN;
	}
}


/** WIE sollen die Aufgeben gelöst werden? */

// / module: division a / b |  test:
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
// output(divide(0,0));
function divide(a,b) {

	// 1. Iteration
	// if (b == 0) {
	// 	return "Teilen durch 0 nicht möglich!";
	// } else {
	// return a/b;
	// }

	// 2. Iteration
	if (b == 0) {
		return ERROR_STR_DIV;  // Ausnahme
	} 
	
	return a/b;  // Regel
	
}

// module: multiplication a * b |  test:
// output(multiply(3,2));
// output(multiply(3,-2));
// output(multiply(3,0));
function multiply(a,b) {
	return  a * b;
}

// module: subtraction a - b |  test:
// output(subtract(3,2));
// output(subtract(3,-2));
// output(subtract(3,0));
// output(subtract(0,2));
function subtract(a,b) {
	return a - b;
}

// module: addition a + b |  test:
// output(add(2,2));
// output(add(2,-2));
// output(add(2,0));
function add(a,b) {
	return a + b;
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	if (Number.isNaN(outputData)) {
		console.log(GRZ);
		console.log(NNAN);
	} 
	else {
		switch (outputData) {
			case ERROR_STR_GEN:
				console.log(GRZ);
				console.log(outputData);
				break
			default:
				console.log(GRZ);
				console.log(ERG + outputData);
				console.log(GRAT);
				break
	}
}

console.log(GRZ);
console.log("Drücken Sie Enter zum beenden des Programms.");
console.log();
console.log("Noch eine Rechnung? Drücken Sie hierfür die Taste W und anschließend mit Enter bestätigen!");
let neu = prompt().toLowerCase();
if (neu == "w") {
	console.clear();
	startApp();
} 

	//console.log(outputData);
}







// const prompt = require('prompt-sync')({sigint: false});

// const ERROR_STR_DIV = "ERROR: Division by 0 not possible!";
// const ERROR_STR_GEN = "ERROR: Something went wrong!";
// const ERROR_STR_ABORT = "ERROR: Aborted by user!";
// const INFO_STR_OP = "Insert correct operator [ + | - | * | : | / ]: ";
// const INFO_STR_RES = "The result is: ";
// const INFO_STR_PRE_NUM = "Insert ";
// const INFO_STR_POST_NUM = " number: ";

// /** Variable (Global)*/
// let isNotAborted = true;

// // application / App
// startApp();
// function startApp() {

//     let num1,num2,op;

//     /** Ausführlich */

//     if (isNotAborted) {
//       num1 = getNumber("1st");
//     }

//     if (isNotAborted) {
//       op = getOp();
//     }

//     if (isNotAborted) {
//       num2 = getNumber("2nd");
//     }

//     if (isNotAborted) {
//         output(calculator(num1,num2,op))
//     } else {
//         output(ERROR_STR_ABORT);
//     }

//     /** Kompakt */

//     // num1    = isNotAborted && getNumber("1st");
//     // op      = isNotAborted && getOp();
//     // num2    = isNotAborted && getNumber("2nd");
//     // output(isNotAborted ? (calculator(num1,num2,op)): ERROR_STR_ABORT);

// }

// // module: data input | test:
// //  output(getNumber("1st"));
// function getNumber(figure) {

//     let displayStr = INFO_STR_PRE_NUM + figure + INFO_STR_POST_NUM;
//     let inputStr = prompt(displayStr);
//     // output(inputStr);

//     /** 
//      * Wenn User abbricht, macht eine weitere Bearbeitung
//      * keinen Sinn -- > Abbruch mit return
//      * 
//     */
//     if (inputStr == null){
//         isNotAborted = false; // These wird widerrufen ...
//         return;
//     }
   
//     let num = parseInt(inputStr);

//     // wenn Eingabe keine Zahl --> nochmal
//     if (isNaN(num)){
//        getNumber(figure) 
//     }
    
//     return num;
        
// }

// // module: input operator | Test:
// // output(getOp());
// function getOp() {

//     let op = prompt(INFO_STR_OP); 
//     // if op is NOT valid AND user DIDN'T click at Abbrechen
//     while (isOpNotValid(op) && (op !== null)) {
//         op = prompt(INFO_STR_OP);
//     }

//     if (op == null){isNotAborted = false;}
//     return op;
// }

// // module: check operator | Test:
// // agreement : "+","-","*",":","/"
// // output(isOpNotValid("+"));
// // output(isOpNotValid("-"));
// // output(isOpNotValid("*"));
// // output(isOpNotValid(":"));
// // output(isOpNotValid("/"));
// // output(isOpNotValid("#?#"));
// // output(isOpNotValid(""));
// function isOpNotValid(op) {
//     return op != "+" && op != "-" && op != "*" && op != ":" && op != "/";
// }

// // module: calculator | tests:
// // agreement : "+","-","*",":"
// // output(calculator(2,2,"+"));
// // output(calculator(2,2,"-"));
// // output(calculator(2,2,"*"));
// // output(calculator(2,2,":"));
// // output(calculator(2,0,"/"));
// // output(calculator(2,2,"#?!"));
// function calculator(a,b,op) {
//     switch (op) {
//         case "+": // addition
//             return add(a,b);
//         case "-": // subtraktion
//             return subtract(a,b);
//         case "*": // multiplikation
//             return multiply(a,b);
//         case ":": // divison
//         case "/": // divison
//             return divide(a,b);
//         default:  // Error ...
//             return ERROR_STR_GEN;
//     }
// }

// // module: division a / b |  test:
// // output(divide(2,3));
// // output(divide(2,-3));
// // output(divide(2,0));
// // output(divide(0,2));
// function divide(a,b) {
//     if (b == 0) {
//         return ERROR_STR_DIV; 
//     }
//     return a / b; 
//  }

// // module: multiplication a * b |  test:
// // output(multiply(2,3));
// // output(multiply(2,-3));
// // output(multiply(2,0));
// function multiply(a,b) {
//     return a * b; 
//  }

// // module: subtraction a - b |  test:
// // output(subtract(2,3));
// // output(subtract(2,-3));
// // output(subtract(2,0));
// function subtract(a,b) {
//     return a - b; 
//  }
 
// // module: addition a + b |  test:
// // output(add(2,3));
// // output(add(2,-3));
// // output(add(2,0));
// function add(a,b) {
//    return a + b; 
// }

// // module: console output | test:
// // output("hello");
// // output(2);
// function output(outputData) {
// //    console.log(typeof outputData);
//     if (typeof outputData == "number") {
//         console.log(INFO_STR_RES + outputData); 
//     } else {
//         console.log(outputData); 
//     }
// }