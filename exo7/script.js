// const pTextElement = document.getElementById("pText");

// function upSize(){
//     pTextElement.style.fontSize = "2rem";
// }

// pTextElement.onwheel = upSize;


const titleElement = document.getElementById("title");
const subTitleElement = document.getElementById("subTitle");

subTitleElement.onclick = changeColor ;

function changeColor(){
    titleElement.style.color = "red";
}