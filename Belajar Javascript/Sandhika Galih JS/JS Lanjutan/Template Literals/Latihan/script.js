// Latihan HTML Fragments

/* const mhs = {
    nama: 'Arrizky Hasya Pratama',
    umur: 24,
    nim: '10515112',
    email:' arizariz@email.com',
};

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nim">${mhs.nim}</span>
</div>`;
 */

// 2. Looping
/* const mhs =[
    {
        nama: 'Arrizky Hasya Pratama',
        email: 'arizariz@email.com',
    },
    {
        nama: 'Louisa Kiara',
        email: 'louwkey@email.com',
    },
    {
        nama: 'Lili Smile Kitty',
        email: 'similikiti@email.com',
    }
];

const el = `<div class="mhs">
    ${mhs.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
    </ul>`).join('')}
</div>` */


// 3.  Conditionals
//  ternary
/* const lagu = {
    judul: 'Intuisi',
    penyanyi: 'Yura Yunita',
    // feat: 'John Lennon'
}

const el = `<div class="lagu">
    <ul>
        <li>${lagu.penyanyi}</li>
        <li>${lagu.judul} ${lagu.feat ? `(feat, ${lagu.feat})` : `` }</li>
    </ul>
</div>` */

// 4. Nested
//  HTML Fragments bersarang

const mhs = {
    nama: 'Arrizky Hasya Pratama',
    semester: 5,
    mataKuliah: ['Rekaya Web',
        'Algoritma & Struktur Dasat',
        'Pemrograman Web',
        'Pancasila',
    ],
};

function cetakMataKuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="semester"> Semester: ${mhs.semester}</span>
    <h4>Mata Kuliah:</h4>
        ${cetakMataKuliah (mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;