const btn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');



btn.addEventListener('click', function (){
    nav.classList.toggle('nav-active');
});