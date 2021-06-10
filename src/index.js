import './assets/styles/styles.css';
import createTempData from "./page-creation/createTempData.js"
import createForecast from "./page-creation/createForecast.js"
import createWindData from "./page-creation/createWindData.js"
import createAtmosData from "./page-creation/createAtmosData.js"
import createAskForLocPage from "./page-creation/createAskForLocPage.js"


async function getWeatherData(location, content) {
    console.log(location + "cry")
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`);
    const responseJson = await response.json();

    createTempData(responseJson, content);
    createForecast(responseJson, content);
    createWindData(responseJson, content);
    createAtmosData(responseJson, content);
}

const content = document.getElementById("main");

async function initializePage(content) {
    
    locData = await createAskForLocPage(content) 
    console.log(locData + "suck my balls")

    getWeatherData(locData, content)
}

initializePage(content)