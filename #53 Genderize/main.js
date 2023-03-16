const serverUrl = 'https://api.genderize.io';



const formGenderize = document.querySelector('.formGenderize');
const p = document.querySelector('p');




async function formHandler(event) {
    event.preventDefault();

    let firstName = event.target.firstElementChild.value;
    const url = `${serverUrl}?name=${firstName}`;
    let promise = await fetch(url);

    let fetchAwait = await promise.json();
    console.log(fetchAwait.gender)

    if (fetchAwait.gender === 'male') {
        p.textContent = 'Ваш пол: Мужской'
    } else {
        p.textContent = 'Ваш пол: Женский'
    }

    if (fetchAwait.gender !== 'female' && fetchAwait.gender !== 'male') {
        p.textContent = 'Ошибка. Имя не распознано.'
    }
}

formGenderize.addEventListener('submit', formHandler);

