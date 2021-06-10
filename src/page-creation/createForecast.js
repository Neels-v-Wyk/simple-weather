export default function createForecast(data, content) {

    let forecastMain = document.createElement("div")
    forecastMain.classList.add("forecastMain")

    let currentTime = data["location"]["localtime_epoch"]
    let hour = new Date(currentTime).getHours();
    
    // forecast will be 3 previous hours, the current hour, and the 3 next hours
    // so if it's 16:00 it will be:
    // [13, 14, 15, 16, 17, 18, 19]

    for (let index = (hour - 3); index < (hour+4); index++) {
        let newElement = document.createElement("div")
        newElement.classList.add("EForecast")

        let newETemp = document.createElement("p")
        if (index == hour) {
            newETemp.classList.add("bright", "ETemp", "ECurrent")
            newETemp.textContent = 	"▴"
        } else {
            newETemp.classList.add("mid", "ETemp")
            newETemp.textContent = data["forecast"]["forecastday"]["0"]["hour"][index]["temp_c"] + "°"
        }

        newETemp.classList.add("mid", "ETemp")
        newElement.appendChild(newETemp)

        let newETime = document.createElement("p")
        newETime.textContent = index + ":00"

        if (index == hour) {
            newETime.classList.add("midBright", "ETime", "ECurrent")
        } else {
            newETime.classList.add("dark", "ETime")
        }

        newElement.appendChild(newETime)


        forecastMain.appendChild(newElement)
    }

    content.appendChild(forecastMain)

}