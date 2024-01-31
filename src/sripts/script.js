
const form = document.querySelector('#formSendMessage');
const submitButton = document.querySelector('#submitButton');
const body = document.querySelector('#body');


submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    form.reset();
    alert('It is demo. Nothing submitted');
});


const showMenu = document.querySelector('#showMenu');
const hideMenu = document.querySelector('#hideMenu');
const navMobile = document.querySelector('#navMobile');
let isMenuShown = false;

showMenu.addEventListener('click', (event) => {
    event.preventDefault();
    navMobile.classList.add('nav__mobile--show');
    body.classList.add('hide-overf-onmenu');
});

hideMenu.addEventListener('click', (event) => {
    event.preventDefault();
    navMobile.classList.remove('nav__mobile--show');
    body.classList.remove('hide-overf-onmenu');
});

document.addEventListener('click', (event) => {
    if (!showMenu.contains(event.target)) {
        navMobile.classList.remove('nav__mobile--show');
        body.classList.remove('hide-overf-onmenu');
    }
});



