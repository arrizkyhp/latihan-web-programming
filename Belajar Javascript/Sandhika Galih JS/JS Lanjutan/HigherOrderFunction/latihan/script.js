// ambbil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang 'JAVASCRIPT LANJUTAN'
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


// ambil durasi masing-masing video
.map(item => item.dataset.duration)


// ubah durasi menjadi integer, ubah menit menjadi detik
.map(waktu => {
    // 10:20 -> [10,20] split
    const parts = waktu.split(':').map(part => parseFloat(part));
    return (parts[0] * 60) + parts[1];
})

// jumlahkan semua detik
.reduce((total, detik) => total + detik);

// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;


// simpan di DOM
jVideo = document.querySelector('.jumlah-video');
totalDurasi = document.querySelector('.total-durasi');

const jumlahVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

jVideo.innerHTML = `${jumlahVideo} Video`
totalDurasi.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik`