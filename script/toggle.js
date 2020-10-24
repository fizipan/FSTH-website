const menu = document.querySelector('.menu-toggle input');
const ul = document.querySelector('.navigation');


menu.addEventListener('click', function(){
    ul.classList.toggle('slide');
})