/* const umur = 200;

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
}; */

// ===================== References and Value =====================

const name1 = 'ariz';
const name2 = 'ariz';
if (name1 === name2) {
  console.log('its the same');
}

const person1 = {
  first: 'ariz',
  last: 'hasya',
};

const person2 = {
  first: 'ariz',
  last: 'hasya',
};
if (person1 === person2) {
  console.log('its not same');
}

// copy of the object not reference
const person3 = { ...person1 }; // ... spread
person3.first = 'Hasya'; // this will not the same as person1

// merging object
const meatInventory = {
  bacon: 2,
  sausage: 3,
  oyster: 10,
};

const veggieInventory = {
  cabbage: 7,
  lettuce: 5,
  oyster: 20,
};

// read last , oyster gonna be 20
const refrigator = {
  ...meatInventory,
  ...veggieInventory,
};
