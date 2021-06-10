export default async function createAskForLocPage(content) {

    let locationData = ""

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
    askButton.addEventListener("click", () => {clickHandler()})

    async function clickHandler(){
        locationData = await requestLocation();
    }

    askPage.appendChild(askButton)
    content.appendChild(askPage)

    return locationData;
}


function requestLocation() {

    function success(e){
        document.getElementById("askPage").remove();

        console.log(e["coords"]["latitude"], e["coords"]["longitude"]);
        return new Promise(resolve => (e["coords"]["latitude"] + "," + e["coords"]["longitude"]))
    }

    function error(e){
        console.log(e)
    }

    navigator.geolocation.getCurrentPosition(success, error);
    
}