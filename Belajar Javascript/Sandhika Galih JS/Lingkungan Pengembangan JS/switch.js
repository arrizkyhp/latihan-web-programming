// var angka = parseInt(prompt('Masukan angka :'));


// switch (angka) {
//     case 1:
//         alert('anda memasukan angka 1');
//         break;
//     case 2:
//         alert('anda memasukan angka 2');
//         break;
//     case 3:
//         alert('anda memasukan angka 3');
//         break;
//     default:
//         alert('angka yang anda masukan salah');
//         break;
// }

var item = prompt('Masukan Makanan/Minuman yang bergizi : \n cth:  Nasi, Telur, Ayam, Cireng, Cola');

switch (item) {
    case 'Nasi':
    case 'Telur':
    case 'Ayam':
        alert('Yeayyy! Makanan/Minuman yang anda masukan Bergizi');
        break;
    case 'Cireng':
    case 'Cola':
        alert('Hmmmm, Makanan/Minuman yang anda masukan tidak bergizi');
        break;
    default:
        alert('Makanan/Minuman yang anda masukan salah');
        break;
}