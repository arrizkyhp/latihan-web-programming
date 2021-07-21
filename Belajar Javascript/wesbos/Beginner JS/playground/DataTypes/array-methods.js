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
function createRange(start, end) {
  const range = Array.from({ length: end - start + 1 }, function (item, index) {
    return index + start;
  });
  return range;
}

// make object to array
const movies = {
  hobbits: 7,
  batman: 9,
  shawsank: 8,
};
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
Object.entries(movies).forEach(([key, value]) => {
  console.log(key, value);
});
