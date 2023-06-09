import {getHours, getMinutes} from 'date-fns';
import {getCookie, setCookie, deleteCookie} from './cookie';

// Смена вкладок

const now = document.querySelector('#tab-btn-1')
const details = document.querySelector('#tab-btn-2')
const forecast = document.querySelector('#tab-btn-3')

let locationsSet = new Set();

function displayOn() {
    const contentDivOne = document.querySelector('.content_1')
    const contentDivTwo = document.querySelector('.content_2')
    const contentDivThree = document.querySelector('.content_3')


    switch (this.id){
        case 'tab-btn-1':
            contentDivOne.id = 'active';
            contentDivTwo.id = '';
            contentDivThree.id = '';
            break;
        case 'tab-btn-2':
            contentDivTwo.id = 'active';
            contentDivOne.id = '';
            contentDivThree.id = '';
            break;
        case 'tab-btn-3':
            contentDivThree.id = 'active';
            contentDivTwo.id = '';
            contentDivOne.id = '';
            forecastHandler();
            break;
    }
}


now.addEventListener('click', displayOn)
details.addEventListener('click', displayOn)
forecast.addEventListener('click', displayOn)


// Запрос погоды



const formFinder = document.querySelector('.text');
const thisTemp = document.querySelector('.thisTemp');
const thisCity = document.querySelector('.thisCity');
const thisCloud = document.querySelector('.cloud');
const detailsCity = document.querySelector('.detailsCity');
const detailsTemp = document.querySelector('.detailsTemp');

function fetchData(url) {
    return fetch(url)
        .then(response => response.json());
}

 async function formFinderHandler(event, currentCityname) {

     event.preventDefault();

    let cityName;
     if (event.type === 'submit') {
        cityName = event.target.firstElementChild.value;
    }
     if (event.type === 'click') {
        cityName = event.target.textContent;

     }
     if (event.type === 'load') {
         cityName = currentCityname;
     }

     try {
         const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
         const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
         const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

         const data = await fetchData(url);
         const temp = (Math.round(data.main.temp-273.15));
         const feelsLike = (Math.round(data.main.feels_like-273.15));
         const weather = data.weather[0].main;
         const sunriseMs = new Date(data.sys.sunrise*1000);
         const sunsetMs = new Date(data.sys.sunset*1000);
         const sunrise = ` ${getHours(sunriseMs)}:${getMinutes(sunriseMs)}`;
         const sunset = ` ${getHours(sunsetMs)}:${getMinutes(sunsetMs)}`;
         thisTemp.innerHTML = `${temp} &deg;`
         thisCity.textContent = cityName;

         let weatherPngSrc = '';
         switch(data.weather[0].icon) {
             case '01d':
                 weatherPngSrc = 'url(http://openweathermap.org/img/wn/01d@2x.png)';
                 break;
             case '02d':
                 weatherPngSrc = 'url(http://openweathermap.org/img/wn/02d@2x.png)';
                 break;

             case '03d':
                 weatherPngSrc = 'url(http://openweathermap.org/img/wn/03d@2x.png)';
                 break;

             case '04d':
                 weatherPngSrc = 'url(http://openweathermap.org/img/wn/04d@2x.png)';
                 break;

             case '09d':
                 weatherPngSrc = 'url(http://openweathermap.org/img/wn/09d@2x.png)';
                 break;

             case '10d':
                 weatherPngSrc = 'url(http://openweathermap.org/img/wn/10d@2x.png)';
                 break;
             case '11d':
                 weatherPngSrc = 'url(http://openweathermap.org/img/wn/11d@2x.png)';
                 break;

             case '13d':
                 weatherPngSrc = 'url(http://openweathermap.org/img/wn/13d@2x.png)';
                 break;
             case '50d':
                 weatherPngSrc = 'url(http://openweathermap.org/img/wn/50d@2x.png)';
                 break;
         }
         thisCloud.style.backgroundImage = weatherPngSrc;

         // Details

         detailsCity.textContent = cityName;
         detailsTemp.innerHTML = `
            Temperature: ${temp} ° <br>
            
            Feels like: ${feelsLike} ° <br>
            
            Weather: ${weather} <br>
            
            Sunrise: ${sunrise} <br>
            
            Sunset: ${sunset} <br>
            `
         forecastHandler();
         // storage.saveCurrentCity(cityName);
         setCookie('cityName', cityName);
     } catch {
         (error => alert(`Ooops.... Ошибка :( \n ${error} `))
     }


}

const MONTH = ['Jan','Feb','Mar','Apr','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

async function forecastHandler() {

    const deleteDiv = document.querySelectorAll('.forecast');

    for (elem of deleteDiv) {
        elem.remove();
    }

    const serverUrl = 'http://api.openweathermap.org/data/2.5/forecast';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${thisCity.textContent}&appid=${apiKey}`;
    const contentThree = document.querySelector('.content_3');
    const detailsCity = document.querySelector('.detailsCity2');
    detailsCity.textContent = thisCity.textContent;
    const data = await fetchData(url);
                for (const item of data.list) {

                    const divForecast = document.createElement('div')
                    divForecast.className = 'forecast';

                    const divDate = document.createElement('p');
                    divDate.className = 'Date';
                    divDate.textContent = `${new Date(item.dt*1000).getDate()} ${MONTH[new Date(item.dt*1000).getMonth()]}`;

                    const divRain = document.createElement('p')
                    divRain.className = 'rain';
                    divRain.textContent = item.weather[0].main;


                    const divFeelsTemp = document.createElement('div')
                    divFeelsTemp.className = 'feelsTemp';
                    const feelsLike = item.main.feels_like-273.15;
                    divFeelsTemp.innerHTML = `Feels like: ${Math.floor(feelsLike)} &deg`;


                    const divTemp = document.createElement('div')
                    divTemp.className = 'temp';
                    const temp = item.main.temp-273.15;
                    divTemp.innerHTML = `Temperature: ${Math.floor(temp)} &deg`;


                    const divTime = document.createElement('p')
                    divTime.className = 'Time';
                    divTime.textContent = `${new Date(item.dt*1000).getHours() < 10 ? `0${new Date(item.dt*1000).getHours()}` : new Date(item.dt*1000).getHours()}:${new Date(item.dt*1000).getMinutes()}0`;



                    const divCloud = document.createElement('div')
                    divCloud.className = 'thisCloud';

                    if (item.weather[0].id === 800) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/01d@2x.png)';
                    } else if (item.weather[0].id === 801) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/02d@2x.png)';
                    } else if (item.weather[0].id === 802) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/03d@2x.png)';
                    } else if (item.weather[0].id === 803 || item.weather[0].id === 804) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/04d@2x.png)';
                    } else if (item.weather[0].id > 199 && item.weather[0].id < 233) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/11d@2x.png)';
                    } else if (item.weather[0].id > 299 && item.weather[0].id < 322) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/09d@2x.png)';
                    } else if (item.weather[0].id > 499 && item.weather[0].id < 505) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/10d@2x.png)';
                    } else if (item.weather[0].id === 511) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/13d@2x.png)';
                    } else if (item.weather[0].id > 519 && item.weather[0].id < 532) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/09d@2x.png)';
                    } else if (item.weather[0].id > 599 && item.weather[0].id < 623) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/09d@2x.png)';
                    } else if (item.weather[0].id > 700 && item.weather[0].id < 782) {
                        divCloud.style.backgroundImage = 'url(https://openweathermap.org/img/wn/50d@2x.png)';
                    }


                    contentThree.append(divForecast);

                    divForecast.append(divDate);
                    divForecast.append(divTime);
                    divForecast.append(divTemp);
                    divForecast.append(divRain);
                    divForecast.append(divFeelsTemp);
                    divForecast.append(divCloud);

                }
}

formFinder.addEventListener('submit', formFinderHandler);


 // Added Locations :

// let locationsSet = new Set();

const storage = {
    saveFavoriteCities(favoriteCities) {
        localStorage.setItem('FavoriteCity', JSON.stringify([...favoriteCities]));
    },
    getFavoriteCities() {

        return new Set(JSON.parse(localStorage.getItem('FavoriteCity')));
    },
    saveCurrentCity(CurrentCity) {

        localStorage.setItem('CurrentCity', JSON.stringify(CurrentCity));


    },
    getCurrentCity() {
        return JSON.parse(localStorage.getItem('CurrentCity'));
    }
}

const likeButton = document.querySelector('.like');
const locations = document.querySelector('.locations');

function reloadLikedItems() {
    const cityLike = document.querySelectorAll('.cityLike');
    for (const item of cityLike) {
        item.remove()
    }

    if (locationsSet) {
        for (const item of locationsSet) {

            const newDiv = document.createElement('div');

            const newElem = document.createElement('h2');
            newElem.addEventListener('click', formFinderHandler);

            const deleteElem = document.createElement('button');
            deleteElem.addEventListener('click', deleteItemHandler);

            newDiv.className = 'cityLike';
            deleteElem.className = 'delete';
            newElem.textContent = item;
            newDiv.appendChild(newElem);
            newDiv.appendChild(deleteElem);
            locations.appendChild(newDiv);
            storage.saveFavoriteCities(locationsSet);

        }
    }


}


function likeButtonHandler() {

    locationsSet.add(thisCity.textContent);

    reloadLikedItems();

}

function deleteItemHandler(event) {

    const findItem = event.target.previousSibling.textContent;
    locationsSet.delete(findItem);
    reloadLikedItems();


}

likeButton.addEventListener('click', likeButtonHandler);

window.onload = function() {

    locationsSet = storage.getFavoriteCities();
    if (!locationsSet) {
        locationsSet = new Set();
    }

    reloadLikedItems();
    formFinderHandler(event,getCookie('cityName'))


}


