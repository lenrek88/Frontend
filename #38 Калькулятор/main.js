
const numberA = document.getElementById('a');
const numberB = document.getElementById('b');
const SELECT = document.getElementById('c');
const BUTTON = document.getElementById('d');
const RESULT = document.getElementById('e');
const TOPID = document.getElementById('topDiv');

function calc(operation,a,b) {
    switch (operation) {
        case 'add':
            return a+b;
        case 'multi':
            return a*b;
        case 'subtract':
            return a-b;
        case 'division':
            return a/b;
    }
}

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

// console.log(calc('add',1,2))
// console.log(calc('multi',1,2))
// console.log(calc('subtract',3,2))

BUTTON.addEventListener('click', buttonHandler)