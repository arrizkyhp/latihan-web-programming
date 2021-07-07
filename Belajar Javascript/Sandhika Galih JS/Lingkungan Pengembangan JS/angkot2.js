
var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 4;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. '+ noAngkot + ' beroperasi dsssengan baik');
    noAngkot++;


}

for ( noAngkot = angkotBeroperasi+1 ; noAngkot <= jmlAngkot; noAngkot++) {
    console.log('Angkot No. '+ noAngkot +' tidak sedang beroperasi');
}