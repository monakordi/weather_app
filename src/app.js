function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Thuesday", "Wednesday", "Tursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}:${minutes}`
}



function displayTemperature(response) {

  degree = response.data.main.temp;

    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(degree);

    console.log(response);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let descriptionElements = document.querySelector("#description");
    descriptionElements.innerHTML = response.data.weather[0].description;


    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);

    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = formatDate(response.data.dt * 1000);

    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
    let apiKey = "7e3ee14cebaec2c9539ff301f396fd91";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
}

function converFahrenheit(event) {
 event.preventDefault();
 let fahrenheitTemperature = (degree * 9) / 5 + 32;
 let temperatureElement = document.querySelector("#temperature");
 celciuceLink.classList.remove("active");
 fahrenheitLink.classList.add("active");

 temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function converCelciuce(event) {
 event.preventDefault();
 let temperatureElement = document.querySelector("#temperature");
 celciuceLink.classList.add("active");
 fahrenheitLink.classList.remove("active");
 temperatureElement.innerHTML = Math.round(degree);
}

search("New York");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", converFahrenheit);

let celciuceLink = document.querySelector("#celciuce-link");
celciuceLink.addEventListener("click", converCelciuce);

let degree = null;
