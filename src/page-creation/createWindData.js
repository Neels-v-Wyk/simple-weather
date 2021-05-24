export default function createWindData(data, content) {
    let windReadings = document.createElement("div");
    windReadings.classList.add("windReadings")

    let windTitle = document.createElement("h2")
    windTitle.textContent = "WIND"
    windTitle.classList.add("windTitle", "mid")
    windReadings.appendChild(windTitle)

    let windInfo = document.createElement("div")
    windInfo.classList.add("windInfo")

    // Good heavens I really need to write a function that handles this
    // Creating each element by hand is blasphemy

    // Degrees:

    let windDegreesText = document.createElement("p")
    windDegreesText.textContent = "DEGREES:"
    windDegreesText.classList.add("midBright", "windText")
    windInfo.appendChild(windDegreesText)

    let windDegrees = document.createElement("p")
    windDegrees.textContent = data["current"]["wind_degree"]
    windDegrees.classList.add("bright", "windNum")
    windInfo.appendChild(windDegrees)

    let windDegreesUnit = document.createElement("p")
    windDegreesUnit.textContent = "°"
    windDegreesUnit.classList.add("dark", "windUnit")
    windInfo.appendChild(windDegreesUnit)

    // Direction

    let windDirectionText = document.createElement("p")
    windDirectionText.textContent = "DIRECTION:"
    windDirectionText.classList.add("midBright", "windText")
    windInfo.appendChild(windDirectionText)

    let windDirection = document.createElement("p")
    windDirection.textContent = data["current"]["wind_dir"]
    windDirection.classList.add("bright", "windNum")
    windInfo.appendChild(windDirection)

    let windDirectionUnit = document.createElement("p")
    windDirectionUnit.textContent = ""
    windDirectionUnit.classList.add("dark", "windUnit")
    windInfo.appendChild(windDirectionUnit)

    // Speed

    let windSpeedText = document.createElement("p")
    windSpeedText.textContent = "SPEED:"
    windSpeedText.classList.add("midBright", "windText")
    windInfo.appendChild(windSpeedText)

    let windSpeed = document.createElement("p")
    windSpeed.textContent = data["current"]["wind_kph"]
    windSpeed.classList.add("bright", "windNum")
    windInfo.appendChild(windSpeed)

    let windSpeedUnit = document.createElement("p")
    windSpeedUnit.textContent = "km/h"
    windSpeedUnit.classList.add("dark", "windUnit")
    windInfo.appendChild(windSpeedUnit)


    windReadings.appendChild(windInfo)
    content.appendChild(windReadings)
}