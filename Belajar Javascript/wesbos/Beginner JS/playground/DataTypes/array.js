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
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
// numbers.splice(3, 2);
// console.log(numbers); // [1, 2, 3, 6, 7, 8, 9, 10]
console.log(numbers.splice(3, 2));

// numbers.slice(1, 4);
// console.log(numbers.slice(1, 4)); // [2,3,4]
// console.log(numbers); // the original still the same
