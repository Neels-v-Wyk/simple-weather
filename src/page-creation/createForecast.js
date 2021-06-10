export default function createForecast(data, content) {

    let forecastMain = document.createElement("div")
    forecastMain.classList.add("forecastMain")

    let currentTime = data["location"]["localtime_epoch"]
    let hour = new Date(currentTime).getHours();
    
    // forecast will be 3 previous hours, the current hour, and the 3 next hours
    // so if it's 16:00 it will be:
    // [13, 14, 15, 16, 17, 18, 19]

    for (let index = (hour - 3); index < (hour+4); index++) {
        console.log(index)
        
    }

}