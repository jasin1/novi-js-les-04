// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken.
// Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen.
// Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger).
// Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.



// ---- Verwachte uitkomst: 6


/////------------------------------ opdracht 1: uitwerking -------------------------------------------- ////
// 1. maak een function die array verwerkt
// 2. de function itereert door de array om te checken welke cijfers 8 of hoger zijn
// 3. de gevonden cijfers worden in een ander array bewaard.
// 4. de function geeft aantal cum laude studenten als nummer




/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft.
// Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


/////------------------------------ opdracht 1b: function -------------------------------------------- ////
console.log(' ');
console.log('Opdracht 1b------------------');

function cumLaude(gradesArray){
    let cumLaudeNum = [];
    for(let count = 0; count < gradesArray.length; count++){
        if(gradesArray[count]>= 8){
            cumLaudeNum.push(gradesArray[count]);
        }
    }
    return cumLaudeNum.length;
}

console.log(cumLaude(grades));
console.log(cumLaude([6,4,5]));
console.log(cumLaude([8,9,4,6,10]));


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is,
// maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorg ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

/////------------------------------ opdracht 2: uitwerking -------------------------------------------- ////
// 1. om een gemiddelde te berekenen, moeten alle cijfers bij elkaar geteld worden, en vervolgens gedeeld door het aantal cijfers
// 2. Zoek uit hoe ik alle cijfers in een array bij elkaar kan optellen
// 3. als alle cijfers bij elkaar geteld zijn, dan delen door grades.length

console.log(' ');
console.log('Opdracht 2------------------');

let gradesSum = 0;
for(let i = 0; i < grades.length; i++){
    gradesSum += grades[i];
}

let average = gradesSum / grades.length;
console.log('The average is '+ average);


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft.
// Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

/////------------------------------ opdracht 2b: function -------------------------------------------- ////
console.log(' ');
console.log('Opdracht 2b------------------');


function averageGrades(gradesArray){
    let totalNum = 0;
    let averageNum = 0;
    for(let g = 0; g <gradesArray.length; g++){
        totalNum += gradesArray[g];
    }
    averageNum = totalNum / gradesArray.length;
    console.log('The average is '+ averageNum);
    return averageNum;
}


averageGrades(grades);
averageGrades([6, 4, 5]);
averageGrades([8, 9, 4, 6, 10]);


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

/////------------------------------ opdracht 2c: function -------------------------------------------- ////
console.log(' ');
console.log('Opdracht 2c------------------');

function averageGrades2(gradesArray){
    let totalNum = 0;
    let averageNum = 0;
    let outputNum = 0;
    for(let g = 0; g <gradesArray.length; g++){
        totalNum += gradesArray[g];
    }
    averageNum = totalNum / gradesArray.length;
    outputNum = parseFloat(averageNum.toFixed(2))
    console.log('The average with two decimals is '+ outputNum);
    return outputNum;
}

averageGrades2(grades);
averageGrades2([6, 4, 5]);
averageGrades2([8, 9, 4, 6, 10]);


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is.
// Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

/////------------------------------ Bonusopdracht 3a: stappenplan -------------------------------------------- ////
// 1. een manier vinden om te checken wat het hoogst behaalde cijfer is
// 2. werken met twee variables, eentje voor huidige cijfer, en eentje om te vergelijken
// 3. wanneer de vergelijking niet meer hoger kan, dan heb ik de hoogste cijfer gevonden

// const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

console.log(' ');
console.log('Opdracht 3a------------------');


let highestNum = grades[0];

for( let j = 0; j <grades.length; j++){
    if(grades[j] > highestNum){
        highestNum = grades[j];
    }
}

console.log(highestNum);


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft.
// Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

/////------------------------------ opdracht 3b: function -------------------------------------------- ////

function highestGrade(arr){
    let highNum = arr[0];

    for(let h = 0; h < arr.length; h++){
        if(arr[h] > highNum){
            highNum = arr[h];
        }
    }

    return highNum;
}

console.log(highestGrade(grades));
console.log(highestGrade([6, 4, 5]));
console.log(highestGrade([8, 9, 4, 6, 10]));