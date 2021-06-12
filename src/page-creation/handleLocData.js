import createTempData from "./createTempData.js"
import createForecast from "./createForecast.js"
import createWindData from "./createWindData.js"
import createAtmosData from "./createAtmosData.js"


export default async function handleLocData(location, content) {

    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=1986480656ec490d950204923202611&q=${location}`);
    const responseJson = await response.json();

    createTempData(responseJson, content);
    createForecast(responseJson, content);
    createWindData(responseJson, content);
    createAtmosData(responseJson, content);


    // const latitude  = position.coords.latitude;
    // const longitude = position.coords.longitude;
    // document.getElementById("askPage").remove();

    // console.log([longitude, latitude])

    // // let locationData = position["coords"]["latitude"] + "," + position["coords"]["longitude"]

    // return(locationData)
    // return new Promise(() => locationData)
                
}
