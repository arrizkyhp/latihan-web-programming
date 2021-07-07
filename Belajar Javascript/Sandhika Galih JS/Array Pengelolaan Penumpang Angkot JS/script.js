var penumpang = [];
// var telusur = penumpang.filter(function (e) {
//     return e == undefined;
// })


var tambahPenumpang = function(namaPenumpang, penumpang) {


    // Jika Angkot Kosong
    if (penumpang.length == 0)
    {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    } else {
        // tekusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if (penumpang[i] == undefined) {
                // Cek apakah ada nama yang sama
                if (penumpang.includes(namaPenumpang)) {
                    alert('penumpang bernama '+ namaPenumpang +' sudah ada di dalam angkot!!');
                    return penumpang;
                } else {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan keluar dari function
                return penumpang;
                }
            }
            // Jika sudah ada nama yang sama
            else if (penumpang[i] == namaPenumpang) {
                // tampilkan pesan kesalahan
                alert('penumpang bernama '+ namaPenumpang +' sudah ada di dalam angkot!!');
                return penumpang;
            }
            // Jika seluruh kursi terisi
            else if ( i == penumpang.length - 1 ) {
                //  tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                 // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
    // penumpang.push(namaPenumpang);
    // return

}

var hapusPenumpang = function (namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length == 0) {
        // tampilkan pesan kesalahan
        alert('angkot sedang kosong!!');
         // kembalikan isi array dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
                if (penumpang[i] == namaPenumpang) {
                    // hapus penumpang dengan mengubah namanya
                    penumpang[i] = undefined;
                    // kembalikan isi array & keluar dari fucntion
                    return penumpang;
                } else if (!penumpang.includes(namaPenumpang)) {
                    // tampilkan pesan kesalahanya
                    alert('Penumpang bernama '+ namaPenumpang +' tidak ada!!');
                    // kembalikan isi array & keluar dari function
                    return penumpang;
                }
        }
    }
}

console.log(penumpang);