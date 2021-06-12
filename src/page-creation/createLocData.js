import handleLocData from './handleLocData.js';

export default function createLocRequestPage(content) {

    let askPage = document.createElement("div")
    askPage.id = "askPage"
    
    let askTitle = document.createElement("div")
    askTitle.innerText = "Hello,"
    askTitle.classList.add("askTitle")
    askPage.appendChild(askTitle)

    let askText = document.createElement("div")
    askText.innerText = "for this webpage to work you need to allow location access. Click the button below to initiate the popup, and press 'Accept'"
    askText.classList.add("askText")
    askPage.appendChild(askText)

    let askButton = document.createElement("button");
    askButton.textContent = "REQUEST ACCESS"
    askButton.addEventListener("click", () => navigator.geolocation.getCurrentPosition(onSuccess, onError))
    askPage.appendChild(askButton)
    content.appendChild(askPage)

}

function onError(err) {
    console.log(err)
}

function onSuccess(position) {

    const content = document.getElementById("main");

    document.getElementById("askPage").remove();
    let locationData = position["coords"]["latitude"] + "," + position["coords"]["longitude"]

    handleLocData(locationData, content)

    // return(locationData)


}