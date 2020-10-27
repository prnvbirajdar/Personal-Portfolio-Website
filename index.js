const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
  const nav = document.querySelector('.header__nav')
    nav.classList.toggle('header__nav--open');
    menuToggle.classList.toggle('open')
}); 