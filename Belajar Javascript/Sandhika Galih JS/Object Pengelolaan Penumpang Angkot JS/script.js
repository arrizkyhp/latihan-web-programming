// membuat Object Angkot

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    // Tambah Penumpang
    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    // Penumpang Berkurang
    this.penumpangTurun = function (namaPenumpang, bayar) {
        // Jika Penumpang Kosong
        if (this.penumpang.length == 0) {
            alert('Angkot masih kosong!!');
            return false;
        }

        for (var i = 0;i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }

    }

}

// Inisialisasi Object
var angkot1 = new Angkot('Arrizky', ['Lembang','St hall'],[],0);
var angkot2 = new Angkot('Billy', ['Lembang','Ledeng'],[],0);