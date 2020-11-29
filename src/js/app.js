import goblin from '../img/goblin.png'
import './game_field.js';

const image = `<img src="${goblin}">`;


const divInnerFlex = document.querySelectorAll('.flex-inner');
let imgPlace = 0;

function rndNumber() {
    return Math.floor(Math.random() * fieldsCount);
};

setInterval(()=> {
    divInnerFlex[imgPlace].innerHTML = '';
    let someNumber = rndNumber();
    while(imgPlace === someNumber) {
        someNumber = rndNumber();
    };
    imgPlace = someNumber;
    divInnerFlex[imgPlace].innerHTML = image;
}, 1000);