// Function Declaration
/* function tampilPesan (nama) {
    alert(`halo ${nama}`);
}

tampilPesan("arrizky") */

// ===========================================================
// function Expression
// function disimpan ke variabel

/* const tampilPesan = function  (nama) {
    alert(`halo ${nama}`);
}

tampilPesan("arrizky"); */


// ===========================================================
// Arrow Function

// parameter 1
// jika hanya satu  tidak perlu  () & {}.
// jika isi dari function hanya return saja tidak perlu dicantumkan return
// dinamakan implicit return
/* const tampilPesan = nama =>  `Hallo ${nama}`;
console.log(tampilPesan("arrizky")); */


// parameter 2
// jika 2 parameter perlu ()
/* const tampilNama = (nama, waktu) => {
    return `Halo ${nama} selamat ${waktu}`
} */


// tanpa parameter
// wajib menggunakan()
/* const tampilHW = () => `Hello World`;
console.log(tampilHW()); */


/* const mahasiswa = ['Arrizky', 'Hasya', 'Pratama'];
 */
/* const jumlahHuruf = mahasiswa.map(function(nama) {
    return nama.length;
});
console.log(jumlahHuruf); */

// Arrowed

/* const jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf); */

// jika ingin convert ke object gunakan ()
/* const jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf); */

// ===========================================================

// Konsep this pada Arrow function

// Constructor function
/* const Mahasiswa = function() {
    this.nama = 'Arrizky';
    this.umur = '24';
    this.sayHello = function () {
        return `Halo saya ${this.nama}, dan saya ${this.umur} tahun`;
    }
}

const arrizky = new Mahasiswa(); */

// Arrow Function
// Arrow function tidak memiliki konsep this
// hanya bisa di method
// dalam ibject literal this tidak bisa digunakan
// Kecuali didalamnya terdapat sebuah function yang bukan method.

const Mahasiswa = function() {
    this.nama = 'Arrizky';
    this.umur = '24';
    // method bisa di arrow
    this.sayHello = () => {
        return `Halo saya ${this.nama}, dan saya ${this.umur} tahun`;
    }

    // Arrow function bisa berjalan karena tidak terkena hoisting.
    // arrow function tidak memiliki konsep this, karena dia teidak punya
    // dia akan mengecek ke atas/ lexical scope
    // setInterval(() => {
    //     console.log(this.umur++);
    // }, 500);
}
// arrow function digunakan tergantun kebutuhan.

const arrizky = new Mahasiswa();


// implementasi

// mengambil elemen kotan
/* const box = document.querySelector('.box');


box.addEventListener('click', function() {
    // agar animasi teratur
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);

    // menggunakan arrow function karena ada this didalamnya.
    setTimeout(() => {
        this.classList.toggle(dua);
    },600)
}) */