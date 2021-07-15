
// // Cara ini hanya bisa digunakan kalo cardnya cuma 1

// const container = document.querySelector('.container');
// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', () => {
//    /*  // Cara Arrizky
//     container.removeChild(card);
//     document.body.style.background = 'white'; */

//     // Cara Sandhika
//     card.style.display= 'none';
// });


/*
// DOM Traversal
const closeX = document.querySelectorAll('.close');

closeX.forEach((event) => {
    event.addEventListener('click', (e) => {
        // event.parentElement.style.display = 'none';

        // cek e.target di console
        e.target.parentElement.style.display = 'none';
        // mencegah aksi default <a></a> dimana elemen itu merefresh page
        e.preventDefault();
        e.stopPropagation();
    });
});

const cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    card.addEventListener('click', function(event) {
        alert('ok');
    });
}); */

// ketika children memiliki event dan parent juga memeiliki event, saat kita menjalankan event children, event parent juga akan dijalankan.
// agar tidak dijalankan secara otomatis  digunakan event. stopPropagation();


const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    // jika yang kita klik punya class close
    if(e.target.className == 'close') {
       e.target.parentElement.style.display = 'none';
    }
})








/*
// Coba Method
const nama = document.querySelector('.nama');

// Mengambil parent
console.log(nama.parentNode); // output <div class="card"....
console.log(nama.parentElement); // output <div class="card"....
// mengambil naik satu/ kakeknya
console.log(nama.parentElement.parentElement); // output <div class="container"....

// Mengambil Sibling
console.log(nama.nextSibling); // #text | karena di html ada Enter antara nama dan telp
console.log(nama.nextElementSibling); // <span class="telp" | mengabaikan enter
 */