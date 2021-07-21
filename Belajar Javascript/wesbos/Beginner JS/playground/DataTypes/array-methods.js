/* Static Methods */

// Array.of()
// Array.of('sepeda', 'mobil'); // ["sepeda", "mobil"]

// Make a function that creates a range from x to y with Array.from();
// Array.from({ length: 10 }); // make 10 empty array
// const range = Array.from({ length: 10 }, function () {
//   return 'ariz';
// }); // array ariz 10x

// const range = Array.from({ length: 10 }, function (item, index) {
//   return index;
// }); // array 1,2,3...10;

// make it function
// function createRange(start, end) {
//   const range = Array.from({ length: end - start + 1 }, function (item, index) {
//     return index + start;
//   });
//   return range;
// }

// make object to array
// const movies = {
//   hobbits: 7,
//   batman: 9,
//   shawsank: 8,
// };
// console.log(Object.keys(movies));
// console.log(Object.values(movies));

// Object.entries(movies).forEach(function (entry) {
//   //   console.log(entry);
//   //   split into variable
//   const key = entry[0];
//   const value = entry[1];
//   //   one liner
//   //  const [key, value];
//   console.log(key, value);
// });

// short hand of top entrie
// Object.entries(movies).forEach(([key, value]) => {
//   console.log(key, value);
// });

// Instance Methods
// method that live on each array
// .join turn array into string

//= ===========================================================================================
/* Instance Methods */
// const recipe = ['egg', 'flour', 'chocolate'];
// const food = 'seblak,cilok,bala-bala,gehu';

// join()
// console.log(recipe.join()); // egg,flour,chocolate
// console.log(recipe.join('-')); // egg-flour-chocolate

// split()
// separated by coma
// console.log(food.split(',')); // ["seblak", "cilok", "bala-bala", "gehu"]

// const toppings = ['kerupuk', 'mie', 'sosis', 'baso', 'cilok', 'tulang', 'tahu'];
/* // take the last item off toppings with pop();
const lastItem = toppings.pop();
console.log(lastItem);
console.log(toppings);
// add it back with push()
toppings.push('tahu');
console.log(toppings);
// take the first item off toppings with shift()
const firstItem = toppings.shift();
console.log(firstItem);
console.log(toppings);
// add it back in with unshift()
toppings.unshift('kerupuk');
console.log(toppings);
// DO the last four, but immutable (with spreads and new variabkes)
let newToppings = toppings.slice(0, toppings.length - 1);
console.log(newToppings);

newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings);

newToppings = [...newToppings.slice(1, toppings.length)];
console.log(newToppings);

newToppings = [toppings[0], ...newToppings];
console.log(newToppings);
 */
// ==============

/* // make a copy of the toppings array with slice()
const toppings2 = toppings.slice(0);
// to know copy or not
toppings2[0] = 'jamur';
console.log(toppings);
console.log(toppings2);

// make a copy of the toppings array with a spread
const toppings3 = [...toppings];
console.log(toppings3);

// take out items 3 to 5 of your new toppings array with splice()
toppings3.splice(3, 2);
console.log(toppings3);
// find index of  baso woith indexOf()

console.log(toppings.indexOf('baso'));
// Check if Sukro is in the toppings with includes()
const isInToppings = toppings.includes('sukro');
console.log(isInToppings);
toppings.push('sukro');
console.log(toppings);

// Immutable
const toppingsReversed = [...toppings].reverse();
console.log(toppings);
console.log(toppingsReversed);
 */

//= ===========================================================================================
/* Callback Method */
const comments = [
  { komen: 'Recomended seller', id: 123, rating: 5 },
  { komen: 'Barang bagus seller ramah', id: 233, rating: 4 },
  { komen: '1 hari langsung sampe', id: 143, rating: 5 },
  { komen: 'Barang rusak', id: 623, rating: 1 },
  { komen: 'Barang KW seller lambat', id: 253, rating: 2 },
];

// find comment include rusak

/* First way | Classic Function */
// function findRusak(singleComment) {
// ===== 1st ======
// if (singleComment.komen.includes('rusak')) {
//   return true;
// }
// return false;

// ====== 2nd ======
// if its only one use one liner
//   return singleComment.komen.includes('rusak');
// }

/* Second way | function VAriable */
// const findRusak = function (singleComment) {
//   return singleComment.komen.includes('rusak');
// };

/* Third way | arrow function */
// const findRusak = (singleComment) => singleComment.komen.includes('rusak');

/* Fourth way | Grouping into an object */
// const util = {
//   findRusak(singleComment) {
//     return singleComment.komen.includes('rusak');
//   },
// };

// const commentRusak = comments.find(findRusak);
// const commentRusak = comments.find(util.findRusak);

// console.log(commentRusak);

// =========================
// function inside function
function findByWord(word) {
  return function (singleFeedBack) {
    return singleFeedBack.komen.includes(word);
  };
}
const wordFinder = findByWord('lambat');
const commentRusak = comments.find(wordFinder);

console.log(commentRusak);

// ============================= filter =======================

// const reviewBagus = comments.filter(function (singlefeedback) {
//   if (singlefeedback.rating >= 4) {
//     return true;
//   }
//   return false;
// });

// oneliner
const reviewBagus = comments.filter(
  (singlefeedback) => singlefeedback.rating >= 4
);

console.table(reviewBagus);
// ==============
function filterByRating(value) {
  return function (singleFeedBack) {
    return singleFeedBack.rating <= value;
  };
}

const filterRating = filterByRating(2);
const fRating = comments.filter(filterRating);
console.table(fRating);

// find all rating that containt seller
function filterByWord(word) {
  return function (singleFeedback) {
    return singleFeedback.komen.includes(word);
  };
}

const byWord = filterByWord('seller');
const filtered = comments.filter(byWord);
console.table(filtered);

// remove 1 rating
const oneRatings = comments.filter((one) => one.rating === 1);
console.table(oneRatings);
