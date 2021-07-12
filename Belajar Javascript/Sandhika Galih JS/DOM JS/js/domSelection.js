console.log('it works!!');

// DOM Selection
// document.getElementsById() => Element

// const judul = document.getElementById('judul');

// judul.style.color = 'violet';
// judul.style.backgroundColor = 'grey';
// judul.innerHTML = 'ArrizkyHP';

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
// const p1 = document.getElementsByClassName('p1')[0];

// p1.style.backgroundColor = 'Blue';
// p1.style.color = 'white';

// ==============================================
// document.querySelector; => element

// const p4 = document.querySelector('#b p');

// p4.style.color = 'blue';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('#b li:nth-child(2)');

// li2.style.backgroundColor = 'crimson';

// ==============================================
// document.querySelectorAll(); => NodeList

// const p = document.querySelectorAll('p');

// for (let i = 0; i < p.length; i++) {

//     p[i].style.backgroundColor = 'salmon';

// }

// ==============================================
// Node Root

const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];



