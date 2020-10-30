// Hamburger Menu Open and Close
const closeButton = document.querySelector('.close-button')
const openButton = document.querySelector('.open-button')

const nav = document.querySelector('.header__nav')

closeButton.addEventListener('click', ()=>{
  nav.classList.remove('nav-open')
})

openButton.addEventListener('click', ()=>{
  nav.classList.add('nav-open')
})

// Menu disappears when scroll down, shows when scroll up
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header__content").style.top = "0";
  } else {
    document.querySelector(".header__content").style.top = "-15em";
  }
  prevScrollpos = currentScrollPos;
}