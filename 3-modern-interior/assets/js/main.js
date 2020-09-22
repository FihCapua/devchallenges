const menu = document.querySelector('.menu');
const btnMenuOpen = document.querySelector('.header__hamburguer--open');
const btnMenuClose = document.querySelector('.header__hamburguer--close');

btnMenuOpen.addEventListener('click', function(){
    menu.classList.add('menu__open');
});

btnMenuClose.addEventListener('click', function(){
    menu.classList.remove('menu__open');
});