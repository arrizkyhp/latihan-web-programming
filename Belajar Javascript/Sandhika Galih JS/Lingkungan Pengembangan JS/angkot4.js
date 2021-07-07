var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkotLembur = 8;

for (noAngkot; noAngkot <= 10; noAngkot++) {


    if (noAngkot <= angkotBeroperasi) {
          console.log('Angkot No. '+ noAngkot + ' beroperasi dengan baik');
    } else if ( noAngkot === angkotLembur) {
         console.log('Angkot No. '+ noAngkot + '  sedang lembur.');
    } else {
         console.log('Angkot No. '+ noAngkot + ' tidak sedang beroperasi');
    }
}
