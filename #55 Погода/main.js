// Смена вкладок

let now = document.querySelector('#tab-btn-1')
let details = document.querySelector('#tab-btn-2')
let forecast = document.querySelector('#tab-btn-3')

function displayOn() {
    let contentDivOne = document.querySelector('.content_1')
    let contentDivTwo = document.querySelector('.content_2')
    let contentDivThree = document.querySelector('.content_3')


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
            forecastF();
            break;
    }
}


now.addEventListener('click', displayOn)
details.addEventListener('click', displayOn)
forecast.addEventListener('click', displayOn)


// Запрос погоды





let formFinder = document.querySelector(".text");
let thisTemp = document.querySelector('.thisTemp');
let thisCity = document.querySelector('.thisCity');
let thisCloud = document.querySelector('.cloud');
let detailsCity = document.querySelector('.detailsCity');
let detailsTemp = document.querySelector('.detailsTemp');

 function formFinderHandler(event, currentCityname) {

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
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    fetch(url)
        .then(promise => promise.json())
        .then(data => {
            let temp = (Math.round(data.main.temp-273.15));
            let feelsLike = (Math.round(data.main.feels_like-273.15));
            let weather = data.weather[0].main;
            let sunriseMs = new Date(data.sys.sunrise*1000);
            let sunsetMs = new Date(data.sys.sunset*1000);
            let sunrise = ` ${sunriseMs.getHours()}:${sunriseMs.getMinutes()}`;
            let sunset = ` ${sunsetMs.getHours()}:${sunsetMs.getMinutes()}`;
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

 })
        .catch(error => alert(`Ooops.... Ошибка :( \n ${error} `))


     forecastHandler(cityName);
    storage.saveCurrentCity(cityName);
}


function forecastHandler(cityName) {

    const serverUrl = 'http://api.openweathermap.org/data/2.5/forecast';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data =>
            console.log(data)
        )
}

formFinder.addEventListener('submit', formFinderHandler);


 // Added Locations :


const storage = {
    saveFavoriteCities(favoriteCities) {
        localStorage.setItem('FavoriteCity', JSON.stringify(favoriteCities));
    },
    getFavoriteCities() {
        return JSON.parse(localStorage.getItem('FavoriteCity'))
    },
    saveCurrentCity(CurrentCity) {
        localStorage.setItem('CurrentCity', JSON.stringify(CurrentCity));

    },
    getCurrentCity() {
        return JSON.parse(localStorage.getItem('CurrentCity'))
    }
}

const likeButton = document.querySelector('.like');
const locations = document.querySelector('.locations');
let locationsArray = [];


function reloadLikedItems() {
    const cityLike = document.querySelectorAll('.cityLike');
    for (const item of cityLike) {
        item.remove()
    }

    for (const item of locationsArray) {
        const newDiv = document.createElement('div');

        const newElem = document.createElement('h2');
        newElem.addEventListener('click', formFinderHandler);
        const deleteElem = document.createElement('button');
        deleteElem.addEventListener('click', deleteItemHandler)

        newDiv.className = 'cityLike';
        deleteElem.className = 'delete';
        newElem.textContent = item;
        newDiv.appendChild(newElem);
        newDiv.appendChild(deleteElem);
        locations.appendChild(newDiv);
    }

    storage.saveFavoriteCities(locationsArray);
}


function likeButtonHandler() {

    locationsArray = locationsArray.filter(item => item !== thisCity.textContent);
    locationsArray.push(thisCity.textContent);
    reloadLikedItems()

}

function deleteItemHandler(event) {

    let findItem = event.target.previousSibling.textContent;
    locationsArray = locationsArray.filter(item => item !== findItem);
    reloadLikedItems()

}

likeButton.addEventListener('click', likeButtonHandler);

window.onload = function() {
    locationsArray = storage.getFavoriteCities();
    reloadLikedItems();
    formFinderHandler(event,storage.getCurrentCity())

}