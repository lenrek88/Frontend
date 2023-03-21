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

async function formFinderHandler(event) {

    event.preventDefault();
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const cityName = event.target.firstElementChild.value;
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}`;
    let promise = await fetch(url);
    let fetchAwait = await promise.json();
    let temp = (Math.round(fetchAwait.main.temp-273.15));
    thisTemp.innerHTML = `${temp} &deg;`
    thisCity.textContent = event.target.firstElementChild.value;

    let weatherPngSrc = '';
    console.log(fetchAwait.weather[0].icon)
    switch(fetchAwait.weather[0].icon) {
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
    console.log(thisCloud.style.backgroundImage)
    thisCloud.style.backgroundImage = weatherPngSrc;
    console.log(thisCloud.style.backgroundImage)

}

formFinder.addEventListener('submit', formFinderHandler);
