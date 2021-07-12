console.log('it works!!');

// DOM Selection
// document.getElementsById() => Element

const judul = document.getElementById('judul');

judul.style.color = 'violet';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'ArrizkyHP';

// ==============================================
// document.getElementsByTagName() => HTMLCollections

// const p = document.getElementsByTagName('p');
// Akan ouput Array
// jika hanya ingin satu:
    // Bisa cara ini
    // p[3].style.backgroundColor = 'Salmon';

    // Bisa cara ini
    // const p = document.getElementsByTagName('p')[3];

// jika ingin semuanya gunakan looping
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'Salmon';
// }

// ==============================================
// document.getElementsByClassName() => HTMLCOllections
const p1 = document.getElementsByClassName('p1')[0];

p1.style.backgroundColor = 'Blue';
p1.style.color = 'white';