// create map
const myMap = new Map();

const person1 = {
  nama: 'arrizky',
  umur: 200,
};

// .set(key, value)
// key can be anything not only string
myMap.set('name', 'wes');
myMap.set(14, 'This is fourteen');
myMap.set(true, 'this is true');

// object;
myMap.set(person1, 'we gucci');
// console.log(myMap);

// contoh pemakaian map
// score
const score = 300;
const prizes = new Map();
prizes.set(100, 'Perunggu');
prizes.set(200, 'Perak');
prizes.set(300, 'Emas');
// console.log(`Kamu mendapatkan ${prizes.get(score)}, Selamat!!`);

const ul = document.querySelector('.prizes');

for (const [points, prize] of prizes) {
  const li = `<li>${points} - ${prize}</li>`;
  ul.insertAdjacentHTML('afterbegin', li);
}
// .has()
// .delete()
