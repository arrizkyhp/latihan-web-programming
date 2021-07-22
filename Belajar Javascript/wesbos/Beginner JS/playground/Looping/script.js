const toppings = [
  'Mushrooms ',
  'Tomatoes',
  'Eggs',
  'Chili',
  'Lettuce',
  'Avocado',
  'Chiles',
  'Bacon',
  'Pickles',
  'Onions',
  'Cheese',
];

const students = [
  {
    id: '11ce',
    first_name: 'Dall',
    last_name: 'Puckring',
  },
  {
    id: '2958',
    first_name: 'Margarete',
    last_name: 'Brandi',
  },
  {
    id: '565a',
    first_name: 'Bendicty',
    last_name: 'Woodage',
  },
  {
    id: '3a16',
    first_name: 'Micki',
    last_name: 'Mattes',
  },
  {
    id: 'f396',
    first_name: 'Flory',
    last_name: 'Gladeche',
  },
  {
    id: 'de5f',
    first_name: 'Jamill',
    last_name: 'Emilien',
  },
  {
    id: '54cb',
    first_name: 'Brett',
    last_name: 'Aizikowitz',
  },
  {
    id: '9135',
    first_name: 'Lorry',
    last_name: 'Smallman',
  },
  {
    id: '978f',
    first_name: 'Gilly',
    last_name: 'Flott',
  },
];

const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley',
    },
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep',
    },
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer',
    },
  },
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
  beyond: 10,
  beef: 5,
  pork: 7,
};

const prices = {
  hotDog: 453,
  burger: 765,
  sausage: 634,
  corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
  { comment: 'Love the burgs', rating: 4 },
  { comment: 'Horrible Service', rating: 2 },
  { comment: 'Smoothies are great, liked the burger too', rating: 5 },
  { comment: 'Ambiance needs work', rating: 3 },
  { comment: 'I DONT LIKE BURGERS', rating: 1 },
];

const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },
  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
];

//* ================================================== Loop Time ================================================== */

// function logTopping(topping, index, toppingArray) {
//   const nextTopping = toppingArray[index + 1];
//   const prevTopping = toppingArray[index - 1];
//   // log the prev topping if there is one

//   prevTopping ? console.log(prevTopping) : null;
//   // loop the topping
//   console.log(topping.toUpperCase());
//   // log the next topping if there is one
//   /*  if (nextTopping) {
//     console.log(nextTopping);
//   } */
//   // oneliner
//   nextTopping ? console.log(nextTopping) : null;

//   // if its the last item in the array, say good bye
//   index === toppingArray.length - 1
//     ? console.log('good bye')
//     : console.log('Getting next topping');
//   console.log('---------🤴🏽---------');
// }

// toppings.forEach(logTopping);

// /* inventory.forEach((invent) => {
//   console.log(invent.price);
// });
//  */

// console.clear();

/* ================= Map, Filter, Reduce =================  */

/* Map */
// Map is like a machine in a factory, it takes in data, performs an operation and spit it out on the other side
function addArms(face) {
  return `👋🏻 ${face} 👋🏻`;
}

// Add face
const toys = faces.map(addArms);
console.log(toys);

const nama = ['bella', 'casandra', 'mortimer'];
function kapital(word) {
  //   return word[0].toUpperCase() + word.slice(1);
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}

const goth = nama.map(kapital).map((event) => `${event} Goth`);
console.log(goth); //  ["Bella Goth", "Casandra Goth", "Mortimer Goth"]

// map for number
const harga = [1000, 2000, 10000, 50000];

const hitungPajak = harga.map((total) => (total * 5) / 100 + total);
console.log(hitungPajak);

console.clear();

// map for Object
const cleanPeople = people.map(function (person) {
  //   console.log(person);
  const birthday = new Date(person.birthday);

  const year = birthday.getFullYear();
  const thisYear = new Date().getFullYear();
  const age = thisYear - year;

  //   get their birthday
  console.log(`Birthday = ${person.birthday}`);
  // figure out how old they are

  console.log(`age = ${age}`);

  // return their full name and age in an object
  return {
    name: `${person.names.first} ${person.names.last}`,
    age,
  };
});

console.table(cleanPeople);
console.clear();

/* Filter */
//  people older than 40 years old
console.log(cleanPeople);
const over40 = cleanPeople.filter((peeps) => peeps.age > 40);

console.table(over40);

// search student by id

function findById(id) {
  return function isStudent(studentData) {
    return studentData.id === id;
  };
}

//   more flexible, we can find by name also
function findByProp(prop, valueWeLookungFor) {
  return function isStudent(studentData) {
    return studentData[prop] === valueWeLookungFor;
  };
}

// const idStudent = prompt('masukan id: ');
// const student = students.find(findById(idStudent));
const student = students.find(findByProp('id', 'f396'));
const student2 = students.find(findByProp('first_name', 'Dall'));
console.table(student);
console.table(student2);
