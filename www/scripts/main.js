const myButtons = document.querySelectorAll(".my-button");
const $menuItem = document.querySelector(".menu");

function addOpenClass() {
    $menuItem.classList.toggle("open");
}
for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("click", addOpenClass);
}

var scroll_State = 0
var initialScroll = 0
window.addEventListener('scroll', function(){
  scroll_State = window.scrollY;
  console.log(scroll_State);
  if (scroll_State > initialScroll) {
    document.querySelector('.menu').classList.remove("open");
    initialScroll = scroll_State
  } else if (scroll_State == 0) {
    document.querySelector('.menu').classList.add("open");
    initialScroll = window.scrollY
  }
})
