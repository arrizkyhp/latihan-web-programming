var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = prompt('Masukan Jumlah Angkot yang beroperasi : ');

for (angkotBeroperasi; angkotBeroperasi > jmlAngkot;) {
    alert('Jumlah Inputan melebihi jumlah Angkot yang ada!');
    angkotBeroperasi = prompt('Masukan Jumlah Angkot yang beroperasi : ');
}

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++ ) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. '+ noAngkot +' beroperasi dengan baik.')
    } else if (noAngkot > angkotBeroperasi) {
        console.log('Ankot No. '+ noAngkot +' sedang tidak beroperasi.')
    } else {
        alert('inputan bukan angka!')
    }
}
