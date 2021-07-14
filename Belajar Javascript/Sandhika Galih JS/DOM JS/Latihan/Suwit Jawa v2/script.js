// tangkap elemen Hasil
const infoArea = document.querySelector('.info');
// tangkap pilihan gambar komputer
const imgKomputer = document.querySelector('.img-komputer');

// Function Pilihan Komputer
function getPilihanKomputer() {
// Generate bilangan random
    const computer = Math.random();

    if ( computer < 0.34) return 'gajah';
    if (computer >= 0.34 && computer < 0.66) return 'semut';
    return 'orang';
}

// Function Rules
function getHasil(computer, player) {
    if (player == computer) return 'SERI';
    if (player == 'gajah') return (computer == 'orang') ? 'MENANG' : 'KALAH';
    if (player == 'orang') return (computer == 'gajah') ? 'KALAH' : 'MENANG';
    if (player == 'semut') return (computer == 'orang') ? 'KALAH' : 'MENANG';
}

// Funtion Warna Info Hasil
function infoHasil(hasil) {
    if (hasil == 'MENANG') return infoArea.style.backgroundColor = 'lightgreen';
    if (hasil == 'KALAH') return infoArea.style.backgroundColor = 'salmon';
    if (hasil == 'SERI') return infoArea.style.backgroundColor = 'lightgray';
}

// Function Clear saat Klik pilihan
function clearInfo() {
    infoArea.innerHTML = '';
    infoArea.style.backgroundColor = 'white';
}

// Function animasi acak pilihan komputer
function randomPutar() {
    const gambar = ['gajah', 'semut' ,'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if ( new Date().getTime() - waktuMulai > 1000 ) {
            clearInterval;
            return;
        }

        imgKomputer.setAttribute('src', '../../img/suwit_jawa/'+ gambar[i++] +'.png');

        // jika gambar sudah lebih dari 3 ulangi ke 0
        if (i == gambar.length) i = 0;
    },100)
}


// tangkap gambar yang di pilih
// funtion pilihan dan hasil
const pilihanGambar =document.querySelectorAll('li img');
pilihanGambar.forEach(function(i) {
    i.addEventListener('click', function() {
    clearInfo();
    // tangkap plihan komputer
    const pilihanKomputer = getPilihanKomputer();
    // tangkap pilihan player
    const pilihanPlayer = i.className;
    // hasil
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);


    // efek putar
    randomPutar();

    // menunggu satu detik setelah efek putar
    setTimeout(function() {
         // ganti gambar Computer
        imgKomputer.setAttribute('src', '../../img/suwit_jawa/' + pilihanKomputer +'.png');
        // info hasil
        infoArea.innerHTML = hasil;
        infoHasil(hasil);
        }, 1000);
    });


});








// Kurang Efektif
/*
// player pilih gajah
const pGajah = document.getElementsByClassName('gajah')[0];
pGajah.addEventListener('click', function() {
    // tangkap plihan komputer
    const pilihanKomputer = getPilihanKomputer();
    // tangkap pilihan player
    const pilihanPlayer = pGajah.className;
    // hasil
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    infoArea.innerHTML = hasil;

    // ganti gambar Computer
    areaKomputer.setAttribute('src', '../../img/suwit_jawa/' + pilihanKomputer +'.png');
});

// player pilih orang
const pOrang = document.getElementsByClassName('orang')[0];
pOrang.addEventListener('click', function() {
    // tangkap plihan komputer
    const pilihanKomputer = getPilihanKomputer();
    // tangkap pilihan player
    const pilihanPlayer = pOrang.className;
    // hasil
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    infoArea.innerHTML = hasil;

    // ganti gambar Computer
    areaKomputer.setAttribute('src', '../../img/suwit_jawa/' + pilihanKomputer +'.png');
});

//  player pilih semut
const pSemut = document.getElementsByClassName('semut')[0];
pSemut.addEventListener('click', function() {
    // tangkap plihan komputer
    const pilihanKomputer = getPilihanKomputer();
    // tangkap pilihan player
    const pilihanPlayer = pSemut.className;
    // hasil
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);
    infoArea.innerHTML = hasil;

    // ganti gambar Computer
    areaKomputer.setAttribute('src', '../../img/suwit_jawa/' + pilihanKomputer +'.png');
});
 */