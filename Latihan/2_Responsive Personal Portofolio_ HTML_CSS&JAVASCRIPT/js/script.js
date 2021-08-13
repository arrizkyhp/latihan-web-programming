let toggle = document.querySelector('.toggle');
let topbar = document.querySelector('.top-bar');
let nav = document.querySelector('nav');
let main = document.querySelector('main');

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active');
    topbar.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
})