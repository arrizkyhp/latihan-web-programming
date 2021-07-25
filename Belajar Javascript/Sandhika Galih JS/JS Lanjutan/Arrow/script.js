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


const mahasiswa = ['Arrizky', 'Hasya', 'Pratama'];

/* const jumlahHuruf = mahasiswa.map(function(nama) {
    return nama.length;
});
console.log(jumlahHuruf); */

// Arrowed

/* const jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf); */

// jika ingin convert ke object gunakan ()
const jumlahHuruf = mahasiswa.map(nama => ({nama: nama, jmlHuruf: nama.length}));
console.table(jumlahHuruf);




