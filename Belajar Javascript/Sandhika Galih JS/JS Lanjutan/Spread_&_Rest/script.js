//  Spread Operator
// memecah iterables menjadi single ELements

/* const mahasiswa = ['Arrizky', 'Hasya', 'Pratama'];

console.log(...mahasiswa); // Arrizky Hasya Pratama */

// Kapan kita menggunakan Spred Operator
// Menggabungkan 2 Array atau lebih
// lebih fleksibel memggunakan spread
// biasa digunakan untuk mengcopy Array
/* const mahasiswa = ['Arrizky', 'Hasya', 'Pratama '];
const dosen = ['Adilla', 'Billy', 'Athalla'];

const orang = [...mahasiswa,'Kalea', ...dosen];
console.log(orang); // gabungan 2 array */

// copy array
/* const mahasiswa1 = [...mahasiswa];
console.log(mahasiswa1); */


// NodeList to Array menggunakan Spread
/* const liNama = document.querySelectorAll('li');


const mhs = [...liNama].map(m => m.textContent);
console.log(mhs); */

// Hover per huruf
const nama = document.querySelector('.nama');

const pecahHuruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = pecahHuruf;


console.log(pecahHuruf);