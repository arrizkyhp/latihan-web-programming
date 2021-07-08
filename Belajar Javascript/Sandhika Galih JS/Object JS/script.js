// Membuat Object pada Javascript
// =============================================================================
// Object Literal

// var mahasiswa = {
//     nama : 'Arrizky Hasya Pratama',
//     nim : '10515112',
//     umur : 25,
//     ips : [2.7, 3.5, 3.4, 3,6],
//     alamat : {
//         jalan : "Jalan jalan",
//         kota : "Bandung",
//         provinsi : 'Jawa Barat'
//     }
// };

// Memanggil properti di array
//  mahasiswa.ips[2] // 3.4

// Memanggil properti di object
// mahasiswa.alamat.provinsi // 'Jawa Barat'
// atau
// mahasiswa["alamat"]["provinsi"] // 'Jawa Barat
// atau bisa di gabung
// mahasiswa.alamat["provinsi"] // 'Jawa Barat

// =============================================================================
// Function Declaration

// function buatObjectMahasiswa(nama, nim, email, jurusan) {
//     var mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.nim = nim;
//     mahasiswa.email = email;
//     mahasiswa.jurusan = jurusan;
//     return mahasiswa;
// }

// var mhs = buatObjectMahasiswa('arrizky,', '10515112', 'ariz@gmail.com', 'Teknik Mengemudi');
// var mhs_2 = buatObjectMahasiswa('hasya,', '10515222', 'hasya@gmail.com', 'Teknik Menjahit');



// =============================================================================
// Constructor Function (keyword new)

// function Mahasiswa(nama, nim, email, jurusan) {

//     // var this = {};
//     this.nama = nama;
//     this.nim = nim;
//     this.email = email;
//     this.jurusan = jurusan;
//     // return this;
// }

// var mhs = new Mahasiswa('Billy', '10515112', 'billy@gmail.com', 'Teknik Memasak');
// =============================================================================
// Object.create()



// =============================================================================
// This