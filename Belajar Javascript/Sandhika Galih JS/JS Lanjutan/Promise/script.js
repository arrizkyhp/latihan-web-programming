// Simple tapi mengandalkan Library JQUERY
/* $.ajax({
    url: 'http://www.omdbapi.com/?&apikey=649932da&s=Batman',
    success: movies => console.log(movies),
}); */

// tanpa JQUERY menggunakan vanilla JavaScript
// terlalu panjang direkomendasikan menggunakan FETCH
/* const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response));
        }
    } else {
        console.log(xhr.responseText);
    }
}
xhr.open('get', 'http://www.omdbapi.com/?&apikey=649932da&s=Batman');
xhr.send(); */

// fetch

/* fetch('http://www.omdbapi.com/?&apikey=649932da&s=Batman')
.then(response => response.json())
.then(response => console.log(response)); */



// Promise
// Promise adalah sebuah Object yang merepresentasikan keberhasilan/kegagalan dari sebuah event yang Asynchronous, yang akan terjadi di masa yang akan datang
// janji (terpenuhi / ingkar)
// stater(fulfilled / rejected / pending)
// untuk menjalankan keaddaan  diatas ada 3 fungsi callback
// callback (resolve / reject / finally)
// ada juga aksi uang akan dilakukan ketika janjinya terpenuhi atau tidak.
//  aksi (then / catch) terpenuhi => then | tidak terpenuhi => catch


// Implementasi
// Promise kita pakai biasanya ketika kita akan request ke sebuah API.

// contoh 1
//  let ditepati = true;
/* const janji1 = new Promise((resolve, reject) => {
    // resolve ketika apa | reject ketika apa
    if (ditepati) {
        resolve('Janji telah ditepati');
    } else {
        reject('Ingkar janji')
    }
});

janji1
.then(response => console.log('OK! :' + response ))
.catch(response => console.log('NOT OK! : ' + response));
// OK! :Janji telah ditepati  */


// contoh 2 | Supaya janji tidak langsung ditepati, menunggu proses.
let ditepati = true;
const janji2 = new Promise((resolve, reject) => {
    if (ditepati) {
        // kasih waktu
        setTimeout(() => {
            resolve('Ditepati setelah beberapa waktu!');
        }, 2000);
    } else {
        setTimeout(() => {
            reject('Tidak Ditepati setelah beberapa waktu!');
        }, 2000);
    }
});

console.log('mulai');
// pending lalu beberapa detik fulfilled
// console.log(janji2.then(() => console.log(janji2)));

// menunggu dua detik | pending tidak terlihat
janji2
// finally dijalankan ketika then/catch sudah siap dijalankan
// ketika promise tidak pending, finally akan dijalankan terlebih dahulu
.finally(() => console.log('Selesai menunggu!'))
.then(response => console.log('OK ! : ' + response))
.catch(response => console.log('NOT OK! : ' + response));

console.log('selesai');


// Promise.all()
// dijalankan ketika kita punya banyak promise, ingin dijalankan sekaligus.
// menjalankan beberapa promise sekaligus.

// connect 2 api

let ditepati = true;
const film = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve([{
                judul: 'Batman Begins',
                sutradara: 'Arrizky HP',
                actor: 'Tom Hanks'
            }])
        }, 5000);
    } else {
        setTimeout(() => {
            reject('Api tidak di temukan');
        }, 5000);
    }
});

const cuaca = new Promise((resolve, reject) => {
    if (ditepati) {
        setTimeout(() => {
            resolve([{
                kota: 'Bandung',
                suhu: '20',
                kondisi: 'mendung'
            }])
        }, 500);
    } else {
        setTimeout(() => {
            reject('Api tidak di temukan');
        }, 1000);
    }
})

// tanpa promise.all
// film.then(response => console.log(response));
// cuaca.then(response => console.log(response));

// dengan promise.all
Promise.all([film, cuaca])
// .then(response => console.log(response));
.then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});

