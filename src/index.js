import './assets/styles/styles.css';
import createTempData from "./page-creation/createTempData.js"
import createWindData from "./page-creation/createWindData.js"

async function getWeatherData(location, content) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`);
    const responseJson = await response.json();

    createTempData(responseJson, content);
    createWindData(responseJson, content);

}

const content = document.getElementById("main");

getWeatherData("christiana", content);