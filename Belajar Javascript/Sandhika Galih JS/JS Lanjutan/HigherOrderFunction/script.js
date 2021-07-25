// ketika menggunakan function kita bisa menyimpan function lagi sebagai argument.

function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);

    setTimeout(() => {
        selesai();
    },1000);

}

function selesai() {
    alert(`Selesai mengerjakan tugas!!`);
}

kerjakanTugas('Algoritma', selesai);