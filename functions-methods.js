// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken.
// Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft.
// Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

/////------------------------------ opdracht 1: uitwerking -------------------------------------------- ////

// 1. vind locatie van "@" in de email string en bewaar het in een variable
// 2. gebruik deze variable voor substring methode om domain te vinden


function getEmailDomain(email) {
    let atChar = email.indexOf("@") + 1;
    let domain = email.substring(atChar);

    return domain;
}

console.log(' ');
console.log('Opdracht 1------------------');

console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht.
// De functie checkt of het emailadres een novi domein heeft (medewerker),
// een novi-education domein (student),
// of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

/////------------------------------ opdracht 2: uitwerking -------------------------------------------- ////
// 1. gebruik string methode die check of een van de 3 woorden in de opgegeven email zit
// 2. gebruik switch statement in de function

function typeOfEmail(email) {

    switch (true) {
        case email.includes('@novi-education.nl'):
            return 'Student';


        case email.includes('@novi.nl'):
            return 'Medewerker';


        default:
            return 'Extern';
    }

}

console.log(' ');
console.log('Opdracht 2------------------');
console.log(typeOfEmail("n.eeken@novi-education.nl"));
console.log(typeOfEmail("t.mellink@novi.nl"));
console.log(typeOfEmail("novi.nlaapjesk@outlook.com"));
console.log(typeOfEmail("a.wiersma@outlook.com"));


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is.
// De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

/////------------------------------ opdracht 3: uitwerking -------------------------------------------- ////
// 1. een logica maken dat een string meerdere letters moet hebben, de volgorde klopt en een letter ',' niet bevat

// function checkEmailValidity(email) {
//
//     if (email.endsWith('.')) {
//         return false;
//     }
//     else if(!email.includes('@')){
//         return  false;
//     }
//     else if(email.includes('@')){
//         return true;
//     }
//     else if (email.includes( '@') && email.includes( ',') ) {
//         return false;
//     }else{
//         console.log('done');
//     }
// }


// function checkEmailValidity(email){
//     switch (true){
//         case email.endsWith('.'):
//             return false;
//
//         case email.includes('@'):
//             return true;
//
//
//     }
// }


function checkEmailValidity(email) {
    if (email.endsWith('.') || !email.includes('@') || email.includes('@') && email.includes(',')) {
        return false;
    }
    return true;
}






console.log(' ');
console.log('Opdracht 3------------------');

console.log('n.eeken@novi.nl is '+ checkEmailValidity("n.eeken@novi.nl"));
console.log('tessmellink@novi.nl is '+ checkEmailValidity("tessmellink@novi.nl"));
console.log('n.eekenanovi.nl is '+ checkEmailValidity("n.eekenanovi.nl"));
console.log('n.eeken@novinl. is '+ checkEmailValidity("n.eeken@novinl."));
console.log('tessmellink@novi,nl is '+ checkEmailValidity("tessmellink@novi,nl"));




//uitwerkingen-js-les04