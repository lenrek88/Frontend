const numberA = document.getElementById('a');
const numberB = document.getElementById('b');
const SELECT = document.getElementById('c');
const BUTTON = document.getElementById('d');
const RESULT = document.getElementById('e');
const TOPID = document.getElementById('topDiv');

import {calc} from './calc.js'

function deleteResult (event) {
    event.preventDefault();
    event.target.remove();
}

function buttonHandler (event) {
    event.preventDefault();
    RESULT.textContent = calc(SELECT.value, +numberA.value, +numberB.value);
    let clonedElement = RESULT.cloneNode(true);
    TOPID.appendChild(clonedElement);
    TOPID.insertAdjacentElement('beforeend', clonedElement);
    clonedElement.addEventListener('click', deleteResult);
}



BUTTON.addEventListener('click', buttonHandler)