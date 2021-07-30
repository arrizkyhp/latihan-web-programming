// Callback
// Callback merupakan mekanisme untuk memanggil kembali kode yang ada di program dari proses Async.
// Callback biasanya dibuat dalam bentuk function, dan function tersebut akan dieksekusi saat proses Async selesai.
// Dengan menggunakan Callback, program bisa menerima informasi yang dibutuhkan dari proses yang berjalan secara Async


// Synchronous Callback
// function halo(nama) {
//     alert(`Halo ${nama}`);
// }

// function tampilkanPesan (callback) {
//     const nama = prompt('Masukkan nama:');
//     callback(nama);
//     console.log('test');
// }

// // tanpa kurung, jika ditambah kurung langsung  di eksekusi
// // tampilkanPesan(halo);

// // anonymous function
// tampilkanPesan(nama => alert(`Halo ${nama}`));

// ========================================================
// Asynchronous

// yang ini masih synchronous
/* const mhs = [
    {
        "nama": "Arrizky Hasya Pratama",
        "nim": "10515112",
        "email": "arrizkyhp@email.com",
        "juruan": "Sistem Informasi",
        "idDosenWali": 1
    },
    {
        "nama": "Wildan Darissalam",
        "nim": "10515232",
        "email": "Wild@email.com",
        "juruan": "Sistem Informasi",
        "idDosenWali": 3
    },
    {
        "nama": "Asep Suhendar",
        "nim": "10515221",
        "email": "asep@email.com",
        "juruan": "Teknik Informatika",
        "idDosenWali": 2
    },
];

// proses harus menunggu dulu mhs.forEach baru console.log selesai di eksekusi
console.log('mulai');
mhs.forEach(m => {
    for (let i = 0; i < 10000000; i++) {
        let date = new Date();
    }
    console.log(m.nama);
});
console.log('selesai'); */


// Asynchronous with JSON
// success & error adalah callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if ( xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    }

    xhr.open('get', url);
    xhr.send();
}


console.log('mulai');
getDataMahasiswa('data/mahasiswa.json', result => {
    // console.log(result);
    // menampilkan hanya nama
    const mhs = JSON.parse(result);
    mhs.forEach(m => console.log(m.nama));
}, () => {

});
console.log('selesai');


// Semakin banyak callback, kita bisa punya sesuatu yang di sebut callback hell.
// untuk menghindari callback hell solusinya adalah menggunakan promise.
// melakukan ini tidak salah tetapi ada cara yang lebih efektif yaitu menggunakan Fetch.
// ketika kita menggunakan jquery perlu diingat bahwa kita memanggil library eksternal, ketika kita memanggil library eksternal ada resource yang digunakan.
// jadi defaultnya performance nya akan lebih lambat, dibanding kita menggunakan bawaan dari javascript.

//  =======================================================================================

// AJAX ??
// Ajax singkatan dari Asynchronous JavaScript and XML
// Ajax dapat digunakan untuk mengambil data dari server setelah halaman web tampil
// AJAX dapat digunakan utnuk mengubah tampilan web tanpa harus me-load ulang web.
// dengan menggunakan AJAX kita akan memisahkan antara beban kerja backend & frontend, frontend cukup menampilkan website dulu nanti secara lazy akan memanggil backend data menggunakan AJAX
//  Jadi setelah web tampil maka akan call backend, dengan begitu web terlihat sangat cepat, karena tidak harus menunggu respond backend.
// AJAX biasanya digunakan untuk mengirim data ke server atau menerima data dari server.
// Kita tidak bisa langsung mengambil response AJAX, karena proses AJAX adlaah Async, sehingga kita perlu menunggu sampai proses Async nya selesai.
// untuk mendapatkan informasi AJAX, kita bisa menggunakan AJAX callback, yang akan dieksekusi setelah proses AJAX selesai.

// Ajax dapat mengirim data ke server secara async di backgroud.