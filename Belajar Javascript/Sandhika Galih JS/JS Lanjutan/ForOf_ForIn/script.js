//  For of
//  Array
/* const mahasiswa = ['Arrizky','Hasya', 'Pratama'];

// for biasa
for( let i = 0; i < mahasiswa.length; i++) {
    console.log(mahasiswa[i]);
}

// for each
mahasiswa.forEach( (mhs) => {console.log(mhs); })

// const nama variable of nama array
// m dari array mahasiswa
for(const m of mahasiswa) {
    console.log(m);
} */

// =================================================================================
// String
// =================================================================================

// forEach tidak bisa digunakan untuk string
/* const nama = 'Ariz';
for( const n of nama ) {
    console.log(n);
}
// a r i z */

// =================================================================================

/* const mahasiswa = ['Arrizky','Hasya', 'Pratama'];

// index dalam foreach
mahasiswa.forEach((m, i) => {
    console.log(`${m} adalah mahasiswa ke ${i+1}`);
});

// for off secara default tidak mempunyai index
// tapi tetap bisa dengan cara yang berbeda, dengan menggunakna destructuring
for (const [i, m] of mahasiswa.entries() ) {
    console.log(`${m} adalah mahasiswa ke ${i+1}`);
} */

// =================================================================================
// NodeList
// ================================================================================
// Nodelist ketika kita menggunakan query dalam DOM.
/* const liNama = document.querySelectorAll('.nama');

// forEach
liNama.forEach(n => console.log(n.innerHTML));

// for...of
for (n of liNama) {
    console.log(n.innerHTML);
} */


// =================================================================================
// Arguments
// ================================================================================
// Arguments ada pada function

/* function jumlahkanAngka () {
    // tidak bisa arguments
    // return arguments.reduce((a, i) => a + i);
    // forEach pun tidak bisa

    // for...of
    let jumlah = 0;
    for( a of arguments) {
        jumlah += a
    }
    return jumlah;
}

console.log(jumlahkanAngka(1,2,3,4,5)); */


// =================================================================================
// =================================================================================
// For....in
// ================================================================================
// =================================================================================

const mahasiswa = {
    nama: 'arrizky',
    umur: 24,
    email: 'ariz@gmail.com'
}

for (mhs in mahasiswa) {
    // mengambil value property
    console.log(mahasiswa[mhs]);
    // mengambil index property
    console.log(mhs);
}