
const fieldsCount = 16
const divContainer = document.querySelector('.flex-container');
let i = 0;
while (i < fieldsCount) {
    i++;
    const field = document.createElement('div');
    field.className = 'flex-inner';
    divContainer.appendChild(field);
};