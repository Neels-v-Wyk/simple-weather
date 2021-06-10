export default function createWindData(data, content) {
    let windReadings = document.createElement("div");
    windReadings.classList.add("windReadings")

    let windTitle = document.createElement("h2")
    windTitle.textContent = "WIND"
    windTitle.classList.add("dataTitle", "mid")
    windReadings.appendChild(windTitle)

    let windInfo = document.createElement("div")
    windInfo.classList.add("dataInfo")

    // Good heavens I really need to write a function that handles this
    // Creating each element by hand is blasphemy
    // I'll make it all neat and sexy once I have an MVP

    // Degrees:

    let windDegreesText = document.createElement("p")
    windDegreesText.textContent = "DEGREES:"
    windDegreesText.classList.add("midBright", "dataText")
    windInfo.appendChild(windDegreesText)

    let windDegrees = document.createElement("p")
    windDegrees.textContent = data["current"]["wind_degree"]
    windDegrees.classList.add("bright", "dataNum")
    windInfo.appendChild(windDegrees)

    let windDegreesUnit = document.createElement("p")
    windDegreesUnit.textContent = "°"
    windDegreesUnit.classList.add("dark", "dataUnit")
    windInfo.appendChild(windDegreesUnit)

    // Direction

    let windDirectionText = document.createElement("p")
    windDirectionText.textContent = "DIRECTION:"
    windDirectionText.classList.add("midBright", "dataText")
    windInfo.appendChild(windDirectionText)

    let windDirection = document.createElement("p")
    windDirection.textContent = data["current"]["wind_dir"]
    windDirection.classList.add("bright", "dataNum")
    windInfo.appendChild(windDirection)

    let windDirectionUnit = document.createElement("p")
    windDirectionUnit.textContent = ""
    windDirectionUnit.classList.add("dark", "dataUnit")
    windInfo.appendChild(windDirectionUnit)

    // Speed

    let windSpeedText = document.createElement("p")
    windSpeedText.textContent = "SPEED:"
    windSpeedText.classList.add("midBright", "dataText")
    windInfo.appendChild(windSpeedText)

    let windSpeed = document.createElement("p")
    windSpeed.textContent = data["current"]["wind_kph"]
    windSpeed.classList.add("bright", "dataNum")
    windInfo.appendChild(windSpeed)

    let windSpeedUnit = document.createElement("p")
    windSpeedUnit.textContent = "km/h"
    windSpeedUnit.classList.add("dark", "dataUnit")
    windInfo.appendChild(windSpeedUnit)


    windReadings.appendChild(windInfo)
    content.appendChild(windReadings)
}