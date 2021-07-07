var tanya = true;
while (tanya) {

//  Menangkap Pilihan Player
var player = prompt('Pilih: gajah | semut | orang');

// Menangkap Pilihan Computer
// Generate bilangan random
var computer = Math.random();


if ( computer < 0.34) {
    computer = 'gajah';
} else if (computer >= 0.34 && computer < 0.66) {
    computer = 'semut';
} else {
    computer = 'orang';
}


// Rules

var hasil ='';
if (player == computer) {
   hasil = 'SERI';
} else if (player == 'gajah') {
    // if (computer == 'orang') {
    //     hasil = 'MENANG';
    // } else {
    // hasil = 'KALAH';
    hasil = (computer == 'orang') ? 'MENANG' : 'KALAH';
} else if (player == 'orang') {
    hasil = (computer == 'gajah') ? 'KALAH' : 'MENANG';
} else if (player == 'semut') {
    hasil = (computer == 'orang') ? 'KALAH' : 'MENANG';
} else {
    hasil = 'Masukan Salah!!';
}

// Hasil
alert('Kamu memilih '+ player +' dan komputer memilih '+ computer + '\n Hasilnya '+ hasil);
tanya = confirm('Main Lagi?');

}

alert('Terima Kasih Sudah Main')