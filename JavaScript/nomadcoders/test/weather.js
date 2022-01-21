const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const ErrorWeather = document.querySelector("#weather p");
const API_KEYS = "685f33fc24b25b65de9585aa5b20bac9";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat,lon);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = `${data.sys.country}`;
            weather.innerText = `${data.wind.speed}`;
        
        })
}

function onGeoError() {
    ErrorWeather.innerText = ""
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
