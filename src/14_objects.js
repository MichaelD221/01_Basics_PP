/***** Erinnerung: Arrays *******/

// let arr;
// arr = ["Ich","bin","Max"];
// output(arr);
// output(arr[0]);
// output("------------");


// let comcave;
// comcave =   [
//                 ["Felix", "Michael", "Karsten", "Steffen"],
//                 ["Nina", "Christopher", "Kevin", "Ibrahim", "Marc"]
//             ];

// const NEW_LINE = "\n";
// let brille = comcave[0][0] + ", " + comcave[1][0] + " und " + comcave[1][1];
// let kahl = comcave[0][0] + " und " + comcave[0][1];

// console.log("Unsere Klasse hat folgende Mitschüler:");
// output();
// output("Es gibt insgesamt " + comcave.length + " Sitzreihen.");
// output(NEW_LINE);
// output("Auf der rechten Reihe sitzen: " + comcave[0]);
// output(NEW_LINE);
// output("Auf der linken Reihe sitzen: " + comcave[1]);
// output(NEW_LINE);
// output("wobei " + comcave[1][4] + " eigentlich in einem anderen Raum sitzt, aber uns immer besuchen kommt.");
// console.log("---------------------");

// console.log("Diese Mitschüler haben eine Brille:");
// output(brille);
// output(NEW_LINE);
// console.log("Diese Mitschüler sind kahlköpfig:");
// output(kahl);


// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
// arr =   [
//             ["Ich","bin","Max"],
//             ["Ich","bin","Moritz"]
//         ];
      
// output(arr); // beide Arrays
// output(arr[0]); // erster Array
// output(arr[0][0]+ " " + arr[1][2]); // erster Array, nulltes Wort + zweiter Array, zweites Wort (drittes)
// output(arr[1][0]); // zweiter Array, nulltes Wort
// output("------------");

// // // nested loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         output("Index i: " + i + " Index j: " + j);
//         output(arr[i][j]);       
//     }
// }


/***** Objekte 1 Daten/Funktionen *******/

// let person = {
//                 firstName:"Felix",
//                 familyName:"Wolf",
//                 salary:[120000, 160000],
//                 permission: true,
//                 sayHello: function(){
//                     return "Hallo";
//                 },
//                 sayHello2: function(){
//                     return "Hallo, ich bin " + this.firstName
//                 }

//             };

// output(person);
// output("---------------")

// output(person.firstName);
// output(person.familyName);

// output("---------------")
// output(person.salary[1]);
// output(person.salary.length);
// for (let i = 0; i < person.salary.length; i++) {
//     output(person.salary[i]);
// }

// output("---------------")
// output(person.permission);


// const txt = person.sayHello() + ", ich bin " + person.firstName +
//          " und verdiene " + person.salary[1] + " p.a.";

// output(txt);
// output("---------------")


// const txt2 = person.sayHello2() + " und verdiene " + person.salary[1] + " p.a.";
// output(txt2);

/**** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der Tiefe gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{}}

// let baikal = {
//                 value:"10m",
//                 deep:{
//                     deeper:{
//                             temperature:"4 Grad Celsuis",
//                             deepest:"Das Licht - auf 1642m!"
//                            }
//                      }
//              }


// output(baikal);
// output(baikal.value);
// output(baikal.deep.deeper.temperature);
// output(baikal.deep.deeper.deepest);






// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}