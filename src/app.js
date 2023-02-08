/* 
    File: app.js
    Author: Kiraly Peter
    Copyright: 2023, Kiraly Peter
    Group: SZOFT-1-2-E
    Date: 2023-02-08
    Github: https://github.com/KiralyPeter/dolgozat-3.git
    Licence: GNU GPL 
*/

const r1_Element = document.querySelector("#r1");
const r2_Element = document.querySelector("#r2");
const h_Element = document.querySelector("#h");

const calcButton = document.querySelector("#calcButton");

const result_Element = document.querySelector("#result");

calcButton.addEventListener('click', ()=> {
    console.log("click is working");
    let r1 = Number(r1_Element.value);
    let r2 = Number(r2_Element.value);
    let h = Number(h_Element.value);

    let volume = calcVolume(r1, r2, h);
    console.log("Volume: " + volume);
    result_Element.value = volume;
});

function calcVolume(r1, r2, h){
    let volume = (1/3)*Math.PI*r1*r2*h;
    return volume.toFixed(3);
}
