/*
* File: app.js
* Author: Németh Angéla
* Copyright: 2023, Németh Angéla
* Group: Szoft 1-2 E
* Date: 2023-02-04
* Github: https://github.com/NemethAngela/
* Licenc: GNU GPL
*/

const r1radiusElem = document.querySelector("#r1radius");
const r2radiusElem = document.querySelector("#r2radius");
const heightElem = document.querySelector("#height");
const calcButton = document.querySelector("#calcButton");
const eredmenyElem = document.querySelector("#eredmeny");

calcButton.addEventListener('click', () => {
    let r1radius = Number(r1radiusElem.value);
    let r2radius = Number(r2radiusElem.value);
    let height = Number(heightElem.value);
    let eredmeny = calcVolume(r1radius, r2radius, height);
    eredmenyElem.value = eredmeny.toFixed(3);  
});

function calcVolume(r1, r2, h) {
    return (Math.PI / 3) * r1 * r2 * h;
}
