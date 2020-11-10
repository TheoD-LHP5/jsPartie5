// EXERCICE 1

// function verifyPassword(){
//     let elementPassword = document.getElementById("password");
//     let elementConfirmPassword = document.getElementById("confirmPassword");
    
//     if(elementPassword.value == elementConfirmPassword.value){
//         elementPassword.className="trueBord";
//         elementConfirmPassword.className="trueBord";

//     } else {
//         elementPassword.className="falseBord";
//         elementConfirmPassword.className="falseBord";
//     }
// }

// EXERCICE 3

// function verify(){
//     let regexName = new RegExp(/^[A-Z][a-z -ë]{1,19}$/);
//     let regexMail = new RegExp(/^[a-z0-9.-]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,4}$/);
//     let regexAge = new RegExp(/^[0-9]{1,2}$/);
//     let name = document.getElementById("name");
//     let mail = document.getElementById("mail");
//     let age = document.getElementById("age");

//     if (regexName.test(name.value)){
//         name.style.borderColor = "green";
//         document.getElementById("errorName").textContent = "";
//     } else {
//         name.style.borderColor = "red";
//         document.getElementById("errorName").textContent = "Ceci n'est pas un nom";
//     }
//     if (regexMail.test(mail.value)){
//         mail.style.borderColor = "green";
//         document.getElementById("errorMail").textContent = "";
//     } else {
//         mail.style.borderColor = "red";
//         document.getElementById("errorMail").textContent = "Ceci n'est pas un mail";
//     }
//     if (regexAge.test(age.value)){
//         age.style.borderColor = "green";
//         document.getElementById("errorAge").textContent = "";
//     } else {
//         age.style.borderColor = "red";
//         document.getElementById("errorAge").textContent = "Tu te fous de moi là";
//     }
// }

// EXERCICE 4

// const image = document.getElementById("catTwo");

// image.onclick = function(){
    
//     if (image.src.match("assets/img/catOne.png") != null){
//         image.src = "assets/img/catTwo.png";
//     } else {
//         image.src = "assets/img/catOne.png";
//     }
// }

// image.onmouseover = function (){
//     image.style.width = "40rem";
// }

// image.onmouseleave = function (){
//     image.style.width = "20rem";
// }

// EXERCICE 6


// function addBorder(element){
//     element.style.border = "6px solid red";
// }

// function removeBorder(element){
//     element.style.border = "";
// }

// EXERCICE 8

let theoParent = document.getElementById("parentForm");
let theoBtn = document.getElementById("btnText");

theoBtn.onclick = theoDuppli;

function theoDuppli(){
    let theoNode = document.getElementById("theoNode");
    let theoNodeCopy = theoNode.cloneNode(true);

    theoParent.appendChild(theoNodeCopy);
}