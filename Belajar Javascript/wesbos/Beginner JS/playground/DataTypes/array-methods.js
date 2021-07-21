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
