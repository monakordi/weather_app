function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);

    console.log(response);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;

    let descriptionElements = document.querySelector("#description");
    descriptionElements.innerHTML = response.data.weather[0].main;


    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "7e3ee14cebaec2c9539ff301f396fd91";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`

console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);