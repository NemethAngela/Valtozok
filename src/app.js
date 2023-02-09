/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-02-04
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

const num1 = 37;
// num1 = 25;   //HIBÁS!
console.log(num1);

if (num1 == 37) {
    var a = 35;
    let d = 47;
}

var b = 37;

const num1Elem = document.querySelector("#num1");
const getButton = document.querySelector("#getButton");


getButton.addEventListener('click', () => {
    let szam = num1Elem.value;
    num1Elem.value = '';    // kiiras utan törölje, (F12-vel látjuk a szöveges kiiratást)
    kiir(szam);          //érték átadása szam-mal,  meghívjuk a függvényt
    vizsgalat(szam);
});

function vizsgalat(input) {
    let egyezik = input.match(/^a[0-9]$/)    //regex, azt vizsgálja, hogy az elejétől a végéig 0-9-ig volt-e, és csak egy szám, a betűvel kell kezdődnie
    if (egyezik) {
        console.log("Egyezik")
    }
    else {
        console.log("Nem jó")
    }
    
}


function kiir(szam) {   //át kell venni az értéket
if (szam == 1) {
    console.log("Egy")
}
else if (szam == 2) {
    console.log("Kettő")
}
else if (szam == 3) {
    console.log("Három")
}
else {
    console.log("Ismeretlen érték")
}
}

console.error('uuuuuuuuuuu')    //kiiratás error-ral, F12-vel látjuk

const doboz1 = document.querySelector("#doboz1");
const startButton = document.querySelector("#startButton");

startButton.addEventListener("click", () => {     //eseménykezelő
    doboz1.style.backgroundColor = 'blue';                // háttérszínt megváltozztatjuk css-ről
    doboz1.style.animation = 'valami1 10s';
});

var szamokTomb = [35, 42, 27];       //() => névtelen függvény, mindig van egy törzse
szamokTomb.forEach((szam) => {      //forEach-el be tudjuk járni a függvényt, névtelen függvénnyel
    console.log(szam);
});

// normál változóval:
// function valami() {}
