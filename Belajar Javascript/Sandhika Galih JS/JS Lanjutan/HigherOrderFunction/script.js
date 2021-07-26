// ketika menggunakan function kita bisa menyimpan function lagi sebagai argument.

/* function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);

        selesai();
}

function selesai() {
    alert(`Selesai mengerjakan tugas!!`);
}

kerjakanTugas('Algoritma', selesai); */

// =====================================================================================
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter
// mencari angka yang >= 3

// for
/* const angkaBaru = [];
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3){
       angkaBaru.push(angka[i]);
    }
}

console.log(angkaBaru); */

// filter
// mencari angka yang >= 3
/* const angkaBaru = angka.filter(event => event >= 3); //arrow function
console.log(angkaBaru); // [8, 9, 4, 3, 9] */

// map
// kali semua angka dengan 2
/* const angkaBaru = angka.map(event => event * 2);
console.log(angkaBaru); // [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18] */

// reduce
// untuk melakukan sesuatu pada seluruh element pada array
// menjumlah semua array
// reduce mempunyai 2 argument (accumulator, currentValue)
// secara default ada nilai awal 0 (accumulator + currentValue , 0)  yang bisa di ubah

//  accumulator adalah hasil dari prosesnya.
//  current value adalah element array yang sedang di looping.
/* const angkaBaru = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(angkaBaru); // 26 */


// Method Chaining
// methid Chaining => kita bisa menggabungkan fungsi-fungsi pada higher order dalam satu kali eksekusi
// tidak perlu disimpan di variabel dulu

// cari angka > 5
// kali 3
// jumlahkan
const hasil = angka.filter(event => event >= 5) // [8, 9, 9]
            .map(event => event * 3) // [24, 27, 27]
            .reduce((acc, curr) => acc + curr); // 78

console.log(hasil);
