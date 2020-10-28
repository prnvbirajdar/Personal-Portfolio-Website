
const closeButton = document.querySelector('.close-button')
const openButton = document.querySelector('.open-button')

const nav = document.querySelector('.header__nav')

closeButton.addEventListener('click', ()=>{
  nav.classList.remove('nav-open')
})

openButton.addEventListener('click', ()=>{
  nav.classList.add('nav-open')
})