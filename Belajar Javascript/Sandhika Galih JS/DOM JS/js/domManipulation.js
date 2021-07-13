console.log(`it works`);

// // element.innerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML ='<em>Yohohow</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<h1>Hello World</h1>'

// =========================================================
// element.style.<propertCSS>
// const judul = document.querySelector('#judul');
// judul.style.color = 'salmon';

// =========================================================
// attribut => id="judul"

// const pB = document.querySelectorAll('p')[3];
// const item2 = document.getElementsByTagName('li')[1];

// pB.setAttribute('class','paragraf-empat')
// item2.setAttribute('id','list-item-2' )


// console.log(pB.getAttribute('class'));

// =========================================================
// element.classList

// const p2 = document.querySelector('.p2');

// // menambahkan class baru
// p2.classList.add('label');
// // mengetahui class dalam element
// p2.classList.item(2);
// // mencari class dalam element
// p2.classList.contains('label'); // apakah ada class label? boolean
// // mengganti class dalam element
// p2.classList.replace('label', 'paragraph-dua'); // nama kelas awal, nama kelas baru

// ========================================================================================
//                                     MANIPULASI NODE
// ========================================================================================

// Menambahkan Paragraf Baru di Akhir
// membuat elemen baru
const pBaru = document.createElement('p');
// membuat tulisan yang nanti ada di elemen baru;
const teksBaru = document.createTextNode('Paragraf baru');
// Simpan tulisan ke dalam elemen
pBaru.appendChild(teksBaru);

// Simpan pBaru di akhir Section A
// mengambil element Section A
const sectionA = document.getElementById('a');
// menyimpan pBaru ke Section A
sectionA.appendChild(pBaru);

// =========================================================

// Menambahkan li baru di tengah
// Membuat <li></li> baru
const liBaru = document.createElement('li');
// Membuat tulisannya
const teksLiBaru = document.createTextNode('Item Baru');
// SImpan tulisan ke <li>
liBaru.appendChild(teksLiBaru);

// Simpan liBaru di parent yaitu <ul>
// tangkap parentnya
const parentUl = document.querySelector('section#b ul');
// tangkap elemen setelahnya
// const liSetelahnya = document.querySelector('section#b ul li:nth-child(2)');
    // bisa seperti ini juga
const liSetelahnya = parentUl.querySelector('li:nth-child(2)');
// Simpan li
parentUl.insertBefore(liBaru, liSetelahnya);

// =========================================================
// parentNode.removeChild()
// tangkap parent
const parentSectionA = document.getElementById('a');
// tangkap elemen yang akan di remove
const link = document.getElementsByTagName('a')[0];
// hapus
parentSectionA.removeChild(link);

// =========================================================
// parentNode.replaceChild()
// Node Lama
// tangkap parent
const parentSectionB = document.getElementById('b');
// tangkap elemen yang akan di replace
const p4 = parentSectionB.querySelector('p');

// buat elemen baru
const h2Baru = document.createElement('h2');
// isi text
const h2Text = document.createTextNode('Judul Section B');
// masukan text ke elemen
h2Baru.appendChild(h2Text);

// replace
parentSectionB.replaceChild(h2Baru, p4);


// Menandai elemen baru
pBaru.style.backgroundColor = 'Salmon';
liBaru.style.backgroundColor = 'Salmon';
h2Baru.style.backgroundColor = 'Salmon';