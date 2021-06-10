export default function createTempData(data, content) {
    let tempReadings = document.createElement("div");
    tempReadings.classList.add("tempReadings")

    let tempCountry = document.createElement("h3")
    tempCountry.textContent = data["location"]["country"].toUpperCase();
    tempCountry.classList.add("dark")
    tempReadings.appendChild(tempCountry)

    let tempCity = document.createElement("h2")
    tempCity.textContent = data["location"]["name"].toUpperCase();
    tempCity.classList.add("mid")
    tempReadings.appendChild(tempCity)

    let tempCondition = document.createElement("p")
    tempCondition.textContent = data["current"]["condition"]["text"]
    tempCondition.classList.add("tempCondition")
    tempReadings.appendChild(tempCondition)

    let tempDegrees = document.createElement("h1")
    tempDegrees.textContent = data["current"]["temp_c"] + "°";
    tempDegrees.classList.add("bright")
    tempReadings.appendChild(tempDegrees)


    content.appendChild(tempReadings)
}