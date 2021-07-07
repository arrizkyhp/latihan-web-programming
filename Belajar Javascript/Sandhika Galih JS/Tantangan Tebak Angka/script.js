// var Random = Math.floor(Math.random() * 10) + 1;
// alert(Random);

// Masukan Angka

alert('Tebak angka dari 1-10 \n Kamu punya 3 Kesempatan');
var random = Math.floor(Math.random() * 2) + 1;
// var kesempatan = 3;
var hasil = '';
var nyawa = true;


while (nyawa) {
var player = prompt('Masukan Angka: ');

for (kesempatan = 3; kesempatan>=1; kesempatan--) {

    if (player == random) {
    hasil = 'Benar';
    alert(hasil + ' Jawabanya adalah '+ random +' \nNyawa kamu tersisa: ' + kesempatan +' \nKamu Hebat!!');
    nyawa = confirm('Apakah anda mau menebak lagi?');
} else if (player <= random) {
    hasil = 'terlalu RENDAH'
    kesempatan--;
    alert(hasil + '\nKesempatan kamu tinggal: ' + kesempatan);

} else if (player => random) {
    hasil = 'terlalu tinggi'
    kesempatan--;
    lert(hasil + '\nKesempatan kamu tinggal: ' + kesempatan);
} else {
    hasil = 'Inputan Salah';
}

}



}

alert('Terima Kasih!!');


  // alert('Wah sayang sekali, Kesempatan Habis \nJawabanya adalah ' +random);
    // nyawa = confirm('Ingin main lagi ?');
    // if (nyawa == true) {
    //     kesempatan = 3;
    // }



