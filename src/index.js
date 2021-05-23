import './assets/styles/styles.css';
import createBigTemp from "./page-creation/createBigTemp.js"

async function getWeatherData(location) {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`);
    return response.json();
}
const data = getWeatherData("enschede");

const content = document.getElementById("main");

data.then((jsonData) => {
    createBigTemp(jsonData, content);
})


createBigTemp(data, content)