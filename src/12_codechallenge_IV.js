

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));
output(getSentence(["Drei","Chinesen","mit","'nem","Kontrabass"]));

function getSentence(arr,op) {
   // ???

    const GAP = " ";
    const SEN = ".";
    const QUE = "?";
    const EXP = "!";

    let text = arr.join(GAP);

    switch (op) 
    {
        case "S": 
            text += SEN;
            break;
        case "Q":
            text += QUE;
            break;
        case "E":
            text += EXP;
            break;
        default:
            text += SEN;
    }
    return text;
}



// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}