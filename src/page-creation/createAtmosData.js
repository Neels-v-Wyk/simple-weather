export default function createAtmosData(data, content) {
    let atmosReadings = document.createElement("div");
    atmosReadings.classList.add("atmosReadings")

    let atmosTitle = document.createElement("h2")
    atmosTitle.textContent = "ATMOSPHERE"
    atmosTitle.classList.add("dataTitle", "mid", "justify-end")
    atmosReadings.appendChild(atmosTitle)

    let atmosInfo = document.createElement("div")
    atmosInfo.classList.add("dataInfo", "justify-end")

    // Good heavens I really need to write a function that handles this
    // Creating each element by hand is blasphemy
    // I'll make it all neat and sexy once I have an MVP

    // UV Index:

    let atmosUVText = document.createElement("p")
    atmosUVText.textContent = "UV INDEX:"
    atmosUVText.classList.add("midBright", "dataText")
    atmosInfo.appendChild(atmosUVText)

    let atmosUVIndex = document.createElement("p")
    atmosUVIndex.textContent = data["current"]["uv"]
    atmosUVIndex.classList.add("bright", "dataNum")
    atmosInfo.appendChild(atmosUVIndex)

    let atmosUVIndexUnit = document.createElement("p")
    atmosUVIndexUnit.textContent = ""
    atmosUVIndexUnit.classList.add("dark", "dataUnit")
    atmosInfo.appendChild(atmosUVIndexUnit)

    // Humidity

    let atmosHumidText = document.createElement("p")
    atmosHumidText.textContent = "HUMIDITY:"
    atmosHumidText.classList.add("midBright", "dataText")
    atmosInfo.appendChild(atmosHumidText)

    let atmosHumidInfo = document.createElement("p")
    atmosHumidInfo.textContent = data["current"]["humidity"]
    atmosHumidInfo.classList.add("bright", "dataNum")
    atmosInfo.appendChild(atmosHumidInfo)

    let atmosHumidUnit = document.createElement("p")
    atmosHumidUnit.textContent = "%"
    atmosHumidUnit.classList.add("dark", "dataUnit")
    atmosInfo.appendChild(atmosHumidUnit)

    // Cloud data

    let atmosCloudText = document.createElement("p")
    atmosCloudText.textContent = "CLOUDS:"
    atmosCloudText.classList.add("midBright", "dataText")
    atmosInfo.appendChild(atmosCloudText)

    let atmosCloudInfo = document.createElement("p")
    atmosCloudInfo.textContent = data["current"]["cloud"]
    atmosCloudInfo.classList.add("bright", "dataNum")
    atmosInfo.appendChild(atmosCloudInfo)

    let atmosCloudUnit = document.createElement("p")
    atmosCloudUnit.textContent = "%"
    atmosCloudUnit.classList.add("dark", "dataUnit")
    atmosInfo.appendChild(atmosCloudUnit)

    // finally add to parent element

    atmosReadings.appendChild(atmosInfo)
    content.appendChild(atmosReadings)
}