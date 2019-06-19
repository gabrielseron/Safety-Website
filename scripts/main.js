const myButtons = document.querySelectorAll(".my-button");
const $menuItem = document.querySelector(".menu");

function addOpenClass() {
    $menuItem.classList.toggle("open");
}
for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("click", addOpenClass);
}


const plus = document.querySelector('.plus')
const show = document.querySelector('.hidden')

function showMore() {
 
}
