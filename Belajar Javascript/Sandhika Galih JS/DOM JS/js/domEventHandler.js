// Inline HTML Attribute tidak disarankan karena mencampurkan html dan js
// panggil element
const p3 = document.querySelector('.p3');

// buat function
function ubahWarna() {
    p3.style.backgroundColor = 'salmon';
}
// buat onclick="ubahWarna()" di elemet .p3 untuk memanggil

// ========================================================
// Element Method
// panggil element
const p2 = document.querySelector('.p2');

// buat function
function ubahWarna2() {
    p2.style.backgroundColor = 'salmon';
}

// inisialisasi
p2.onclick = ubahWarna2;

// ========================================================
// addEventListener() lebih baru dari pada on

// panggil element
const p4 = document.querySelector('section#b p')

// event <==================
p4.addEventListener('click', function() {
    // panggil parent
    const catchUl = document.querySelector('section#b ul');
    // buat elemen dan text
    const makeList = document.createElement('li');
    const textList = document.createTextNode('item baru');
    makeList.appendChild(textList);

    // inisialisasi
    catchUl.appendChild(makeList);
});

// ========================================================
// Perbedaan
// onclick
const p1 = document.querySelector('.p1');

// p1.onclick = function() {
//     p1.style.backgroundColor ='aqua'
// };
// // yang running akan yang ini saja / yang terakhir
// p1.onclick = function () {
//     p1.style.color ='blue'
// };

// addEventListener();
p1.addEventListener('click', function() {
    p1.style.backgroundColor ='aqua';
});

p1.addEventListener('click', function() {
    p1.style.color ='blue'
});
// Keduanya akan running