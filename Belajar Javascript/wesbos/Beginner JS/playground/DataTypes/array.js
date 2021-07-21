// const names = ['arrizy', 'hasya', 'pratama'];
// // access item inside array
// console.log(names[1]);
// //  check array length
// console.log(names.length);

// // ==== Mutation Method ====
// // they do change the original data
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const numberBackwards = numbers.reverse(); // we dont need variable
// // numbers.reverse() // just do this
// // console.log(numberBackwards); // no need this
// console.log(numbers);
// // the original numbers also got reverse

// // ==== Immutable Method ====
// // They do not change the original data
// const pizzaSlice = numbers.slice(1, 4); // O: 2,3,4

// console.log(pizzaSlice);

// // NOTE: anytime you want to use a mutation method and NOT mutate the original Array
// // we need to take a new copy of the array
// const numbersReversed = [...numbers]; // use spread
// numbersReversed.reverse();
// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9] the original still intact
// console.log(numbersReversed); // [9, 8, 7, 6, 5, 4, 3, 2, 1]
// // the original still

// add Items

// Using Push
// This does mutate the original array
// names.push('Luoisa', 'Liliam');
// if dont want to mutate, take copy of the original
// const names2 = [...names, 'Louisa', 'Liliam'];

// Using Unshift
// add at the front
// names.unshift('Luna');
// dont want mutate
// const names3 = ['Luna', 'Bima', ...names];

// ======================SLice and SPlice =========================================
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);
// numbers.splice(3, 2);
// console.log(numbers); // [1, 2, 3, 6, 7, 8, 9, 10]
// console.log(numbers.splice(3, 2));

// numbers.slice(1, 4);
// console.log(numbers.slice(1, 4)); // [2,3,4]
// console.log(numbers); // the original still the same

/* const motor = ['suzuki', 'yamaha', 'kawasaki', 'honda'];

// add new item in between
const newBikes = [
  // take before trange
  ...motor.slice(0, 2),
  // add new
  'vespa',
  //   add the rest
  ...motor.slice(2),
];

console.log(newBikes); // ["suzuki", "yamaha", "vespa", "kawasaki", "honda"]

// WANT TO REMOVE KAWASAKI

const newBikes2 = [
  // takes before kawasaki range
  ...newBikes.slice(0, 3),
  //   takes after kawasaki range
  ...newBikes.slice(4),
];

console.log(newBikes2); // ["suzuki", "yamaha", "vespa", "honda"]
 */

//  ============================================ Delete Comments ============================================
const comments = [
  { text: 'Recomended Seller', id: 123 },
  { text: 'Barang bagus seller ramah', id: 233 },
  { text: '1 hari langsung sampe', id: 143 },
  { text: 'Barang rusak', id: 623 },
  { text: 'Barang KW seller lambat', id: 253 },
];

function deleteComment(id, comments) {
  // first find the index of the item in the array
  const commentIndex = comments.findIndex((comment) => comment.id === id);
  // make a new array without that item in it
  return [
    ...comments.slice(0, commentIndex),
    ...comments.slice(commentIndex + 1),
  ];

  // return our new array
}
console.log(comments);
console.log('Delete 143');
console.log(deleteComment(143, comments));
