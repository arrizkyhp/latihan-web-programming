//  Spread Operator
// memecah iterables menjadi single ELements

// const mahasiswa = ['Arrizky', 'Hasya', 'Pratama'];

/* console.log(...mahasiswa); // Arrizky Hasya Pratama

// Kapan kita menggunakan Spred Operator
// Menggabungkan 2 Array atau lebih
// lebih fleksibel memggunakan spread
// biasa digunakan untuk mengcopy Array
const mahasiswa = ['Arrizky', 'Hasya', 'Pratama '];
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
/* const nama = document.querySelector('.nama');

const pecahHuruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = pecahHuruf;


console.log(pecahHuruf); */








// Rest Parameter
// Mereprentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array.
// Rest parameter hanya bisa digunakan di akhir argument.

/* function myFunc(...myArgs) {
    return myArgs // jadi array
    // return arguments; // bisa tetapi bukan array
    // return Array.from(arguments); // jadi array
    // return [...arguments] // jadi array  [1, 2, 3, 4, 5]
}

console.log(myFunc(1,2,3,4,5)); */


/* function jumlahkan(...angka) {
    // let jumlah = 0;
    // for (const a of angka) {
    //     jumlah += a;
    // }
    // return jumlah;

    // pakai reduce
    return angka.reduce((a,b) => a + b);

}

console.log(jumlahkan(1,2,3,4,5)); */


// array destructuring
/* const kelompok1 = ['Arrizky', 'Asep', 'Huda', 'Fidya', 'Wildan,'];
// nama pertama ketua, nama kedua waketu.
const [ketua, wakil, ...anggota] = kelompok1;
console.log(ketua);
console.log(wakil);
console.log(anggota); */



// Object destructuring
/* const team = {
    pm: 'Arrizky',
    frontEnd1: 'Hasya',
    frontEnd2: 'Pratama',
    backEnd: 'Asep',
    ux: 'Huda',
}

const {pm, ...myTeam} = team;
console.log(myTeam); */

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}

// pertama type sisanya nilai
console.log(filterBy('boolean', 1,2,'Arrizky',false,10,true,'Pratama'));