import './assets/styles/styles.css';
import createBigTemp from "./page-creation/createBigTemp.js"

var content = document.getElementById("main");


var columns = [
    createBigTemp(data)
]

columns.forEach(element => {
    content.appendChild(creatorFunction(element));
});