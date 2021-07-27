// Array
/* const coba = ['satu', 'dua', 'tiga'];

// petakan tiap-tiap element array ke variabel terpisah yang namanya bebas.
// skipping items
// const [a, ,c] = coba; // b is not defined


// conventional
// const satu = coba[0];
// const dua = coba[1];

// destructuring
const [a,b,c] = coba;
console.log(a); // satu
console.log(b); // dua
console.log(c); // tiga */


// =========================================================================

// swap items
// menukar isi variabel
/* let a = 1;
let b = 2;
console.log(a, b); // 1 2
[a, b] = [b, a];
console.log (a, b); // 2 1 */

// =========================================================================

// return array pada function
// function bisa mengembalikan array, dan array bisa di tangkap oleh syntax destructuring

/* function coba() {
    return [1,2];
}

const [a, b] = coba();
console.log(a); // 1
console.log(b); // 2 */

// =========================================================================

// rest parameter ...

/* const [a, ...values] = [ 1 , 2 , 3 , 4, 5, 6];
console.log(a); // 1
console.log(values); // [2, 3, 4, 5, 6] */

// =========================================================================

// Nested Array

/* const lang = [
    ['javascript', 'php'],
    'java',
    'ruby',
    'python',
];

const [[js, ph], dua, tiga] = lang;
console.log(js, ph, tiga); // javascript php ruby */

// =========================================================================

// Multidimensional Array

/* const mhs = [
    {nama: 'Arrizky', umur: 21},
    {nama: 'Hasya', umur: 25},
]

const [{nama}, {nama: nama2}] = mhs;
console.log(nama); // Arrizky
console.log(nama2); // Hasya */


// =========================================================================
// Object
// =========================================================================

// Desctructuring Object

/* const mhs = {
    nama: 'Arrizky Hasya Pratama',
    nim: '10515112',
    umur: 24,
};

// conventional
const nama = mhs.nama;

// Destructuring
// nama tidak boleh sembarang, harus sama dengan property
const {nama,nim,umur} = mhs;
console.log(nama); // Arrizky Hasya Pratama
console.log(nim); // 10515112
console.log(umur); // 24 */

// =========================================================================

// Assignment tanpa deklarasi Object
// tambah kurung buka dan tutup

/* ({nama,nim,umur} = {
    nama: 'Arrizky Hasya Pratama',
    nim: '10515112',
    umur: 24,
});

console.log(nama); // Arrizky Hasya Pratama
console.log(nim); // 10515112
console.log(umur); // 24 */

// =========================================================================

// Assignt ke variabel baru

/* const mhs = {
    nama: 'Arrizky Hasya Pratama',
    nim: '10515112',
    umur: 24,
};

// jika tidak ingin sama dengan nama property tambahkan ":"
const {nama: a, nim: b, umur: c} = mhs;
console.log(a); // Arrizky Hasya Pratama
console.log(b); // 10515112
console.log(c); // 24 */

// =========================================================================

// Memberikan default value

/* const mhs = {
    nama: 'Arrizky Hasya Pratama',
    nim: '10515112',
};

// bisa menambahkan value jika tidak ada di property
const {nama,nim,umur = 24} = mhs;
console.log(nama); // Arrizky Hasya Pratama
console.log(nim); // 10515112
console.log(umur); // 24 */

// =========================================================================

// Assignt Variabel baru + Default Value

/* const mhs = {
    nama: 'Arrizky Hasya Pratama',
    nim: '10515112',
};

// menggabungkan variabel baru + default value
const {nama: nm,nim: ni,umur: um = 24} = mhs;
console.log(um); // 24 */

// =========================================================================

// Rest Parameter
// properti tersisa

/* const mhs = {
    nama: 'Arrizky Hasya Pratama',
    nim: '10515112',
    umur: 24,
};

const {nama, ...value} = mhs;
console.log(value); // {nim: "10515112", umur: 24} */

// =========================================================================

// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const mhs = {
    id: 123,
    nama: 'Arrizky Hasya Pratama',
    nim: '10515112',
    umur: 24,
};

// ambil id saja tidak yang lain
function getIdMhs({ id }) {
    return id;
}

console.log(getIdMhs(mhs));


// =========================================================================
// function
// =========================================================================

// Destructuring Function

/* function penjumlahanPerkalian (a,b) {
    return [a + b, a * b]
}

// const jumlah = penjumlahanPerkalian(2,3);
// console.log(jumlah);

const [jumlah, kali] = penjumlahanPerkalian(2,3);
console.log(jumlah); // 5
console.log(kali); // 6 */


// =========================================================================

/* function kalkulasi(a,b) {
    return [a + b, a * b, a - b,]
}

// const jumlah = penjumlahanPerkalian(2,3);
// console.log(jumlah);

// bagi tidak ada, tambah nilai default
const [tambah, kali, kurang, bagi = 'tidak ada'] = kalkulasi(2,3);
console.log(bagi); // 0.6666666666666666 */


// =========================================================================

// urutan tidak berpengaruh dengan cara return valuenya object
/* function kalkulasi(a,b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b,
    }
}

// urutan tidak berpengaruh karena terasosiainya dengan nama properti
const {tambah, kali, kurang, bagi} = kalkulasi(2, 3);
console.log(kurang); // -1 */


// =========================================================================

// Destructor function arguments
// Nested Object
/* const mhs1 = {
    nama: 'Arrizky',
    umur: 24,
    email: 'ariz@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 70,
    }
}
 */
// tidak memakai destructoring

/* function cetakMhs(nama, umur) {
    return `Halo saya ${nama}, saya ${umur} tahun`;
}

console.log(cetakMhs(mhs1.nama, mhs1.umur)); */

// memekai destructoring
// destructoring argument menjadi object {}
/* function cetakMhs({nama , umur, nilai: {tugas, uts, uas}}) {
    return `Halo saya ${nama}, saya ${umur} tahun, dan nilai uas saya ${uas}`;
}

console.log(cetakMhs(mhs1)); // Halo saya Arrizky, saya 24 tahun, dan nilai uas saya 70 */

// =========================================================================

// nested array Object

const mhs = {
    nama: 'arrizky',
    umur: 24,
    links: [
        {
            nama: 'Facebook',
            url: 'fb.com/arrizz'
        },
        {
            nama: 'Instagram',
            url: 'ig .com/arrizz'
        }
    ]
}

const  { links: [ {}, {nama, url} ] } = mhs;
console.log(nama, url); // Instagram ig .com/arrizz