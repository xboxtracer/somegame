import goblin from '../img/goblin.png'

const fieldsCount = 16
const image = `<img src="${goblin}">`;

const divContainer = document.querySelector('.flex-container');
let i = 0;
while (i < fieldsCount) {
    i++;
    const field = document.createElement('div');
    field.className = 'flex-inner';
    divContainer.appendChild(field);
};

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
}, 2000);