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

const p2 = document.querySelector('.p2');

// menambahkan class baru
p2.classList.add('label');
// mengetahui class dalam element
p2.classList.item(2);
// mencari class dalam element
p2.classList.contains('label'); // apakah ada class label? boolean
// mengganti class dalam element
p2.classList.replace('label', 'paragraph-dua'); // nama kelas awal, nama kelas baru
