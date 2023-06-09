import { formatDistanceToNowStrict } from 'date-fns';

const formHigh = document.querySelector('.formHigh');
const yearThis = document.querySelector('.year');
const dayThis = document.querySelector('.day');
const hoursThis = document.querySelector('.hours');


function formHandler(event) {
    event.preventDefault();
    const date = event.target.firstChild.nextSibling.value;
    const dateReplace = date.replaceAll('-', ', ')
    const year = formatDistanceToNowStrict(new Date(dateReplace), {unit: 'year'});
    const day = formatDistanceToNowStrict(new Date(dateReplace), {unit: 'day'});
    const hours = formatDistanceToNowStrict(new Date(dateReplace), {unit: 'hour'});
    yearThis.textContent = year
    hoursThis.textContent = hours
    dayThis.textContent = day
}

formHigh.addEventListener('submit', formHandler);