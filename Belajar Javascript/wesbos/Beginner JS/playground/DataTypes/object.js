const umur = 200;

const arrizky = {
  name: 'Arrizky',
  umur,
};

// Call properties
console.log(arrizky.name);
// console.log(arrizky['name']]);

// Adding Properties
arrizky.keahlian = {
  coding: true,
  blender: false,
};

// Object that cannot be change
// this cannot add more propertiess
const arizFreeze = Object.freeze(arrizky);

arizFreeze.tinggal = 'Bandung'; // not gonna work

console.log(arrizky);

// Input
const inputName = document.querySelector('[name="ariz"]');
// const name = inputName.value;
// console.log(name);

const name = inputName ? inputName.value : 'No Input Detected';
console.log(name);

// Methods
const Luisa = {
  name: 'uwiw',
  umur: 8,

  // This is method
  sayHello(greeting = 'Maw') {
    return `${greeting} ${this.name}`;
  },
};
