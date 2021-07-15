// ================= Scroll Higlight Nav =================

// Tangkap tiap section
const sections = document.querySelectorAll('section');
// Tangkap Link
const navLi = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            // tangkap id section
            current = section.getAttribute('id');
        }

    });

    navLi.forEach((a) => {
        a.classList.remove('active');
        // jika ada id section yang sama dengan class
        if (a.classList.contains(current)) {
            a.classList.add('active');
            // alert('yes');
        }
    });
});