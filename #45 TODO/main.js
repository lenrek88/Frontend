
const divHigh =  document.querySelector('.HIGH');
const divLow = document.querySelector('.LOW');
const formHigh = document.querySelector('.formHigh');
const formLow = document.querySelector('.formLow');

import {list, addTask, deleteTask, changeStatus} from "./backend.js";


function formHandler(event) {


    event.preventDefault();

    let priority = 'high';
    let textFromForm = event.target.firstElementChild.value;
    // const newForm = document.createElement('form');
    // newForm.className = 'mainFormNotReady';
    // const newCheckbox = document.createElement('input');
    // newCheckbox.type = 'checkbox';
    // newCheckbox.className = 'chkNotReady';
    // newCheckbox.value = "0";
    // newCheckbox.addEventListener('click', checkboxHandler);
    // const newText = document.createElement('p');
    // newText.textContent = textFromForm;
    // const newImg = document.createElement('img');
    // newImg.addEventListener('click', delHandler)
    // newImg.src = 'close-icon.svg';
    // newForm.appendChild(newCheckbox);
    // newForm.appendChild(newText);
    // newForm.appendChild(newImg);
    //
    if (event.target.className === 'formHigh') {
        // divHigh.appendChild(newForm);
        priority = 'high';

    } else {
        // divLow.appendChild(newForm);
        priority = 'low';
    }

    addTask(textFromForm, priority);
    render();
}

function delHandler(event) {
    event.preventDefault();
    event.target.parentNode.remove();
    deleteTask(event.target.previousElementSibling.textContent);
    render();
}


function checkboxHandler(event) {
    event.preventDefault();
   if (event.target.value === "0") {
       event.target.value = "1";
       event.target.parentNode.className = 'mainFormDone';
       event.target.className = 'chkDone';
       changeStatus(event.target.nextElementSibling.textContent, 'Done')
   } else {
       event.target.value = "0";
       event.target.parentNode.className = 'mainFormNotReady';
       event.target.className = 'chkNotReady';
       changeStatus(event.target.nextElementSibling.textContent, 'In Progress')
   }
    render();
}

function render() {
    console.log(list)

    let mainFormNotReady = document.querySelectorAll('.mainFormNotReady');
    let mainFormDone = document.querySelectorAll('.mainFormDone');

    for (const div of mainFormDone) {
        div.remove();
    }

    for (const div of mainFormNotReady) {
        div.remove();
    }

    for (const task of list) {

        let priority = 'high';
        let textFromForm = task.name;
        const newForm = document.createElement('form');
        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';

        if (task.status === "In Progress") {
            newCheckbox.className = 'chkNotReady';
            newCheckbox.value = "0";
            newForm.className = 'mainFormNotReady';
        } else {
            newCheckbox.className = 'chkDone';
            newCheckbox.value = "1";
            newForm.className = 'mainFormDone';


        }


        newCheckbox.addEventListener('click', checkboxHandler);
        const newText = document.createElement('p');
        newText.textContent = textFromForm;
        const newImg = document.createElement('img');
        newImg.addEventListener('click', delHandler)
        newImg.src = 'close-icon.svg';
        newForm.appendChild(newCheckbox);
        newForm.appendChild(newText);
        newForm.appendChild(newImg);

        if (task.priority === 'high') {
            divHigh.appendChild(newForm);
            priority = 'high';

        } else {
            divLow.appendChild(newForm);
            priority = 'low';
        }
    }

    console.log(list)

}


formHigh.addEventListener('submit', formHandler);
formLow.addEventListener('submit', formHandler);