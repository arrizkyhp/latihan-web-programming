// this
// this adalah sebuah keyword special yang secara otomatis di definisikan pada setiap function
//  this adalah window

// var a = 10;
// console.log(this.a);


//  membuat Object
//  ===============================================================================
//  cara 1 - fucntion declaration

// function halo() {
//     console.log('halo');
//     console.log(this);

// }

// halo();
// this pada function declaration adalah mengembalikan object Global

//  ===============================================================================
// cara 2 - object literal

// var obj = {};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// }

// obj.halo();
// this pada object literal mengembalikan object yang bersangkutan

// ===============================================================================
// cara 3 - constructor
// Biasanya diawali huruf besar
// menggunakan 'new' di awal untuk memanggil

function Halo() {
    console.log(this);
    console.log('halo');
}

new Halo();
var obj1 = new Halo();
var obj2 = new Halo();
// this pada constructor mengembalikan object yang baru dibuat

// ===============================================================================
// ===============================================================================
