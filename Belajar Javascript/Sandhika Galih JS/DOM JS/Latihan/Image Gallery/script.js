// Versi Arrizky

// tangkap jumbo
const jumbo = document.querySelector('.jumbo');
// tangkap container
const container = document.querySelector('.container');
// tangkap thumbs
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(event) {
    // Cek apakah yang di klik thumb
    if (event.target.className == 'thumb' ) {
        // cara arrizky
        /*  const imageSource = event.target.getAttribute('src');
        jumbo.setAttribute('src', imageSource); */

        // cara sandhika
        jumbo.src = event.target.src;

        // tambah animasi fade di css
        jumbo.classList.add('fade');
        // timeout fade
        setTimeout(function() {
        jumbo.classList.remove('fade');
        }, 500);

        // menghapus higlight sebelumnya
        thumbs.forEach(function(thumb) {
            // Cara 1
           /*  if (thumb.classList.contains('active')) {
                thumb.classList.remove('active');
            } */

            // Cara 2
            thumb.className = 'thumb';
        });

        // higlight thumb
        event.target.classList.add('active');
    }
});