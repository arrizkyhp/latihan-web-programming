console.log('it works!!');

// ============= VERSI ARRIZKY =============
// tangkap tombol
/* const button = document.getElementsByTagName('button')[0];


button.addEventListener('click', function() {
    // Random Color Generator
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // Color Info
    const pColor = document.querySelector('h3');

    // Element Baru
    const h3 = document.createElement('h3');
    const textColor = document.createTextNode('#'+ randomColor);
    h3.appendChild(textColor);

    // Replace h3
    document.body.replaceChild(h3, pColor);

    // Change Background
    document.body.style.backgroundColor = '#' + randomColor;
}) */


// ============= VERSI SANDHIKA GALIH =============
// tangkap tombol
const tUbahWarna = document.getElementById('tUbahWarna');


tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'Salmon';
    // document.body.setAttribute('class' , 'biru-muda');

    document.body.classList.toggle('biru-muda');
}

// ===============================

// buat tombol
const tAcakWarna = document.createElement('button');
const textTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(textTombol);
tAcakWarna.setAttribute('type', 'button');
// simpan tombol
tUbahWarna.after(tAcakWarna);

// ketika tombol di clik
tAcakWarna.addEventListener('click', function () {
    // random warna
     const redColor = Math.round(Math.random() * 255 + 1);
     const greenColor = Math.round(Math.random() * 255 + 1);
     const blueColor = Math.round(Math.random() * 255 + 1);

    //  rgb to hex
    const rgbToHex = function(rgbColor) {
        let hex = Number(rgbColor).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };

    // Kombinasi rgb to hex
    const fullColorHex = function(r,g,b) {
        let red = rgbToHex(r);
        let green = rgbToHex(g);
        let blue = rgbToHex(b);
        return red+green+blue;
    }

    const hexWarna = fullColorHex(redColor,greenColor,blueColor);
    // tangkap h3
    const pColor = document.querySelector('h3');

     // Element Baru
    const h3 = document.createElement('h3');
    const textColor = document.createTextNode('#'+ hexWarna);
    h3.appendChild(textColor);

    // Replace h3
    document.body.replaceChild(h3, pColor);

     document.body.style.backgroundColor = 'rgb('+ redColor +','+ greenColor +','+ blueColor +')';

});


// ============================================
// Slider
// ============================================

// Slider Value
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;

    document.getElementById('hexMerah').value = r;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sHijau.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
     document.getElementById('hexHijau').value = g;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sBiru.addEventListener('input', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
     document.getElementById('hexBiru').value = b;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


// input Value
const ipMerah = document.querySelector('input[name=ipMerah]');
const ipHijau = document.querySelector('input[name=ipHijau]');
const ipBiru = document.querySelector('input[name=ipBiru]');

console.log(ipMerah);

ipMerah.addEventListener('input', function() {
    const r = ipMerah.value;
    const g = ipHijau.value;
    const b = ipBiru.value;
    sMerah.value = r;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

ipHijau.addEventListener('input', function() {
    const r = ipMerah.value;
    const g = ipHijau.value;
    const b = ipBiru.value;
    sHijau.value = g;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

ipBiru.addEventListener('input', function() {
    const r = ipMerah.value;
    const g = ipHijau.value;
    const b = ipBiru.value;
    sBiru.value = b;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});



// ============================================
// Cursor Slider
// ============================================


document.body.addEventListener('mousemove', function (event) {
    // Posisi Mouse
    // console.log(event.clientX);

    // Ukuran Browser
    // Mengetahui Lebar window browser
    // console.log(window.innerWidth);

     // sumbuX red, sumbuY Green & blue 100
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
     const yPos = Math.round((event.clientY / window.innerHeight) * 255);

     document.body.style.backgroundColor = 'rgb('+ xPos + ',' + yPos + ', 100)';




})



