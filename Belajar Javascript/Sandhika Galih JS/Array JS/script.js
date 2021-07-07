
// Manipulasi Array
// ==================================================================================
// 1. Menampilkan isi Array

// var binatang = ['Kucing','Kelinci','Monyet','Panda','Koala','Sapi'];
// var ariz = ['Arrizky','Bandung',14,'November',1997,true];
// var myFunc = function () {
//     return
// }
// var tipeData = ['teks',2,false,myFunc,[4,5,6]];

// console.log(tipeData[4][2]); // Output = 6
// console.log(binatang[2]); // Output = Monyet

// =====================================

// var arr = ['Arrizky','Hasya','Pratama','Adilla','Kirana'];


// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke - '+ (i+1) +' adalah '+ arr[i]);
// }

// ==================================================================================
// 2. Menambah isi array

// var arr = [];

// arr [0] = "Arrizky";
// arr [1] = "Hasya";
// arr [2] = "Pratama";

// console.log(arr);

// ==================================================================================
// 3. Menghapus isi array

// var arr = ['Arrizky','Hasya','Pratama'];

// arr[2] = undefined;

// console.log(arr);



// ==================================================================================
// Method Pada Array
// ==================================================================================
// 1. Join
// Merubah isi array menjadi String

// var arr = ['Arrizky','Hasya','Pratama'];
// console.log(arr.join());
// console.log(arr.join(' | '));

// ==================================================================================
// 2. Push & Pop
// Push = Menambah element array di akhir array | bisa beberapa element sekaligus
// Pop = Menghilangkan element terakhir di array | harus 1 persatu

// var arr = ['Arrizky','Hasya','Pratama'];
// arr.push('Adilla');
// arr.pop();
// console.log(arr.join(' | '));

// ==================================================================================
// 3. Unshift & Shift
// Bekerja pada element pertama di dalam array
// Unshift = Menambahkan Element baru di awal array
// Shift = Menghilangkan Element baru di awal array

// var arr = ['Arrizky','Hasya','Pratama'];

// arr.unshift('Billy');
// arr.shift();

// console.log(arr.join(' | '));

// ==================================================================================
// 4. Slice & Splice
//    Slice = Mengiris/Mengambil beberapa bagian pada array untuk menjadi array yang baru
//     - slice(awal,akhir)

//    Splice = Menyambung/Menambal/Menyisipkan element di tengah-tengah pada array
//     - splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ......)

// var arr = ['Arrizky','Hasya','Pratama','Kalea', 'Billy' ,'Dilla'];


// Splice
// arr.splice(2, 0, 'Kalea', 'Billy' ,'Dilla'); // Arrizky | Hasya | Kalea | Billy | Dilla | Pratama
// arr.splice(1, 2); // Arrizky -- menghapus Hasya dan Pratama
// arr.splice(1, 2, 'Udin'); // Arrizky | Udin

// Slice
// var arr2 = arr.slice(1,3); // Hasya | Pratama -- mengambil 1 dan 2 saja tapi 3 sebagai akhir

// console.log(arr.join(' | '));
// console.log(arr2.join(' | '));

// ==================================================================================
// 5. Foreach & Map
// Digunakan untuk melakukan Looping pada array
// var angka = [1,2,3,4,5,6,7,8];
// var arr = ['Arrizky','Hasya','Pratama','Kalea', 'Billy' ,'Dilla'];

// for biasa
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// Foreach
// angka.forEach(function(e) {
//     console.log(e);
// })

// Menambahkan index i
// arr.forEach(function(e, i){
//     console.log('Mahasiswa ke - '+ (i+1) +' adalah '+ e);
// });

// Map
// Mengembalikan Array sedangkan forEach tidak
// var angka = [3,4,7,3,9,5,8,5];

// dikali 2
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' | '));

// ==================================================================================
// 6. Sort
// Untuk mengurutkan isi array

// Contoh 1 tanpa puluhan
// var angka = [3,4,7,3,9,5,8,5];
//  console.log(angka.join(' | '));
// angka.sort();
//  console.log(angka.join(' | '));

// Contoh 2 dengan puluhan
// var angka = [3,4,10,30,20,7,3,9,5,8,5];
//  console.log(angka.join(' | '));
// angka.sort(function (a,b){
//     return a-b;
// });
//  console.log(angka.join(' | '));

// ==================================================================================
// 6. Filter & Find
// Digunakan untuk mencari element pada array
// Find = Mengembalikan 1 nilai
// Filter = bisa Mengembalikan banyak nilai

// Filter
// var angka = [3,4,10,30,20,7,3,9,5,8,5];
// var angka2 = angka.filter(function(e) {
//     // return e == 5;
//     return e > 5;
// })
// console.log(angka2);

// Find
// var angka = [3,4,10,30,20,7,3,9,5,8,5];
// var angka2 = angka.find(function(e) {
//     // return e == 5;
//     return e > 5;
// })
// console.log(angka2);