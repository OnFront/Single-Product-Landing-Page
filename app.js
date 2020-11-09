//HAMBURGER MENU ON CLICK

const btn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('nav');



btn.addEventListener('click', function (){
    nav.classList.toggle('nav-active');
});

// BOOTSTRAP CAROUSEL

$('.carousel').carousel({
    interval: 3500
})

//SHOW-BUTTON ON HOVER OVER IMG

// const img1 = document.querySelector('.cardimg1');
// const img2 = document.querySelector('.cardimg2');
// const btnAddCart1 = document.querySelector('.btn-hide');
// const outside = document.querySelector('.product-cards');


// img1.addEventListener('mouseover', function(){
//     btnAddCart1.classList.toggle('btnAddCart');
     
// });

// outside.addEventListener('mouseover', function(){
//     btnAddCart1.classList.remove('btnAddCart');
//     btnAddCart1.classList.add('btn-hide');
// });
  

