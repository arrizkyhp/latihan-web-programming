// function tambah(a,b) {
//     return a + b;

// }

// var a = parseInt(prompt('masukan nilai a :'));
// var b = parseInt(prompt('masukan nilai b  :'));

// // alert(typeof(a));
// alert(tambah(a,b));


// // function dalam argument
// function tambah(a,b) {
//     return a + b;
// }

// function kali(a,b) {
//     return a * b;
// }

// hasil = kali(tambah(1,2), tambah(3,4));
// alert(hasil);

// funtion arguments
function tambah() {
    var hasil = 0;
    for ( var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4);
console.log(coba);