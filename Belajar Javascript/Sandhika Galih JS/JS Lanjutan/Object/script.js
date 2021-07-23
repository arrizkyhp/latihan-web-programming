// Cara untuk membuat Object pada Javascript
// 1. Object Literal
// kekuranganya jika ingin membuat instansiasi object berikutnya harus membuat copynya
/* let mahasiswa = {
    nama: 'Arrizky',
    energi: 10,
    // method
    makan: function(porsi) {
        this.energi = this.energi + porsi;
        console.log(`Hallo ${this.nama}, selamat makan.
        Sekarang energi kamu jadi ${this.energi}`);
        return
    }

}

mahasiswa.makan(5); */
// 2. function Declaration
// Dengan menggunakan function declaration keuntunganya tidak perlu membuat duplikat dari objectnya.
// cukup buat templatenya saja lalu jika ingin membuat objectnya jadi banyak tinggal memanggil template / instansiasi berulang kali

/* // buat function
function Mahasiswa(nama, energi) {
    // object kosong
    let mahasiswa = {};
    // isi satu-satu
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    // jika ingin membuat method
    mahasiswa.makan = function(porsi) {
        this.energi += porsi;
        return `Nama: ${this.nama}, Energi ${this.energi}`
    }

    // optional
    mahasiswa.maen = function (jam) {
        const kurang = this.energi -= jam;
        return `Energi anda berkurang ${jam} menjadi ${kurang}`
    }
    return mahasiswa
}

const ariz = Mahasiswa('Arrizky', 80);
ariz.makan(20); */
// to call ariz.makan(90);

// 3. Construcor function
// keyword new
// mirip dengan function declaration
// ini yang digunakan kedepan

// jika menggunakan constructor function tidak perlu menuliskan deklarasi  variabel dan return itu sudah secara otomasti dilakukan oleh javascript
// buat function
function Mahasiswa(nama, energi) {

    // isi satu-satu
    this.nama = nama;
    this.energi = energi;

    // jika ingin membuat method
    this.makan = function(porsi) {
        this.energi += porsi;
        return `Nama: ${this.nama}, Energi ${this.energi}`
    }

    // optional
    this.maen = function (jam) {
        const kurang = this.energi -= jam;
        return `Energi anda berkurang ${jam} menjadi ${kurang}`
    }

}

const ariz = new Mahasiswa('Arrizky', 80);
ariz.makan(20);



// 4. Object.create