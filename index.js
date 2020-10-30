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

// Smooth Srolling Behavior
const scroll = new SmoothScroll('a[href*="#"]');

// Animate on Scroll Behavior
AOS.init({
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  once: true,


});