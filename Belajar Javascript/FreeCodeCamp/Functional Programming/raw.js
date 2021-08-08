// * Learn About Functional Programming

// Functional programming is a style of programming where solutions are simple, isolated functions, wihout side effects outside the function scope:
//  INPUT => PROCESS => OUTPUT

/* Functional programming is about:

1. Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change

2.Pure functions - the same input always gives the same output

3. Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled */


/* // Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line */

// ============================================================================================================
// * Understang Functional Programming Terminology

// Callback
// ! Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
// ! A callback is a function passed as an argument to another function.
//  You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

// ! Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions.

// There is a difference. When you say that a language has first-class functions, it means that the language treats functions as values – that you can assign a function into a variable, pass it around etc.
//  Higher-order functions are functions that work on other functions, meaning that they take one or more functions as an argument and can also return a function.
// In JavaScript, all functions are first class functions.

//  ! The functions that take a function as an argument, or return a function as a return value are called higher order functions.
//   Functions such as filter(),map(),reduce(),some() etc, these all are example of Higher-Order Functions.
// Functions returning another function
/* const greet = function (name) {
  return function (m) {
    console.log(`Hi!! ${name}, ${m}`);
  };
};

const greet_message = greet("ABC");
greet_message("Welcome To GeeksForGeeks"); // Hi!! ABC, Welcome To GeeksForGeeks */

// Passing Function as an argument
/* function greet(name) {
  return `Hi!! ${name} `;
}

function greet_name(greeting, message, name) {
  console.log(`${greeting(name)} ${message}`);
}

greet_name(greet, "Welcome To GeeksForGeeks", "JavaScript"); */


// ! When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

// The FCC Team had a mood swing and now wants two types of tea: green tea and black tea.
// With that information, we'll need to revisit the getTea function from last challenge to handle various tea requests. We can modify getTea to accept a function as a parameter to be able to change the type of tea it prepares

/* // Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
}; */

//  This makes getTea more flexible, and gives the programmer more control when client requests change.

// Full Code
/* // Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
); */

// ============================================================================================================
// * Understand the Hazards of Using Imperative Code
// In English (and many other languages), the imperative tense is used to give commands (imperial).
// Similarly, an imperative style in programming is one that gives the computer a set of statements to perform a task.
// In contrast, functional programming is a form of declarative programming. You tell the computer what you want done by calling a method or function.

// ============================================================================================================
// * Avoid Mutations and Side Effects Using Functional Programming
// ! One of the core principles of functional programming is to not change things.
//  Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable.

// ! Recall that in functional programming, changing or altering things is called mutation, the outcome is called a side effect.
// A function, ideally, should be a pure function, meaning that it does not cause any side effects.

/* // The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line
  let addValue = fixedValue
  return addValue += 1

  // Only change code above this line
} */


// ============================================================================================================
// * Pass Arguments to Avoid External Dependence in a Function
// The last challenge We didn't alter the global variable value, but the function incrementer would not work without the global variable fixedValue being there.

// ! Another principle of functional programming is to always declare your dependencies explicitly.
// This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.
// There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program.
// the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.

// The global variable
/* var fixedValue = 4;

function incrementer (val) {
  return val += 1;

incrementer(fixedValue); // 5 */

// ============================================================================================================
// * Refactor Global Variables Out of Functions

// From the last two topic above we have seen two distinct(berbeda) principles for functional programming:

/* 1. Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like var newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.
2. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable. */

/* // The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

function add (bookArr, bookName) { // principle no 2 catch parameter
let newArr = [...bookArr]; // principle no 1 referencing
  newArr.push(bookName);
  return newArr;

}

function remove (bookArr, bookName) {
let newArr = [...bookArr];
  var book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    }
}

var newBookList = add(bookList, 'A Brief History of Time'); // principle no 2 make argument
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newBookList); */

// ============================================================================================================
// * Use the map Method to Extract Data from an Array
// So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.
// functional programming is centered around a theory of functions.

// ! Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.
// In this exercise we are looking at Array.prototype.map(), or more simply map.
// The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

// When the callback is used, it is passed three arguments. => The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.
// For simplicity, the example only uses the first argument of the callback.
/* const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const names = users.map((user) => user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ] */

// The global variable
/* var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
];

var ratings = [];
// using Maps
const title = watchList.map(list => {
const getArr = [];

getArr.push(list.Title)
getArr.push(list.imdbRating)

// make it to object
const makeObject = {
  "title": getArr[0],
  "rating": getArr[1]
}

// push em
ratings.push(makeObject);

})

console.log(JSON.stringify(ratings)); */


// ============================================================================================================
// * Implement map on a Prototype

// As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on.
// It also doesn't alter the original array, as long as its callback function doesn't.
// In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

// You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().
//  The Array instance can be accessed in the myMap method using this.

// The global variable
/* var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
    // use "this" to catch callback
    this.forEach((e) => {
      newArray.push(callback(e));
    })

  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

console.log(new_s) */

// ============================================================================================================
// * Use the filter Method to Extract Data from an Array
// Another useful array function is Array.prototype.filter(), or simply filter().
// filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true.
// In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

// The callback function accepts three arguments.
// The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.

// See below for an example using the filter method on the users array to return a new array containing only the users under the age of 30
// For simplicity, the example only uses the first argument of the callback.

/* const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const usersUnder30 = users.filter((user) => user.age < 30);
console.log(usersUnder30); // [ { name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 } ].
 */


// Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys.
// The new array should only include objects where imdbRating is greater than or equal to 8.0.
// Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

// The global variable
/* var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Chained
var filteredList = watchList.filter(movie => parseFloat(movie.imdbRating) >= 8.0).map(movie => {
 return {
   title: movie.Title,
   rating: movie.imdbRating
 }
});

console.log(filteredList); */

// ============================================================================================================
// * Implement the filter Method on a Prototype

// You might learn a lot about the filter method if you implement your own version of it.
//  The Array instance can be accessed in the myFilter method using this.

// The global variable
/* var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {

  var newArray = [];

  this.forEach(e => {

    if (callback(e) === true ) {
      return newArray.push(e);
    }
  })

  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

console.log(new_s) // [ 23, 65, 5 ] */

// ============================================================================================================
// * Return Part of an Array Using the slice Method

// ! The slice method returns a copy of certain elements of an array.
/*  It can take two arguments,
1. the first gives the index of where to begin the slice,
2. the second is the index for where to end the slice (and it's non-inclusive).
3. If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array.  */

// The slice method does not mutate the original array, but returns a new one.

// example
/* var arr = ["Cat", "Dog", "Tiger", "Zebra"];
var newArray = arr.slice(1, 3); // ["Dog", "Tiger"]. */

// full code

/* let sliceArray = (anim, beginSlice, endSlice) => anim.slice(beginSlice, endSlice);
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3); ["Dog", "Tiger"]; */

// ============================================================================================================
// * Remove Elements from an Array Using slice Instead of splice

// A common pattern while working with arrays is when you want to remove items and keep the rest of the array.
// JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove.
// If the second argument is not provided, the default is to remove items through the end.
// ! However, the splice method mutates the original array it is called on.
//  Here's an example:
/* var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
cities.splice(3, 1); */
//  cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].

// ! the slice method does not mutate the original array, but returns a new one which can be saved into a variable.
// Recall that the slice method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array.

// ! Using the slice method instead of splice helps to avoid any array-mutating side effects.

// Example  It should limit the provided cities array to a length of 3, and return a new array with only the first three items.
/* let nonMutatingSplice = cities => cities.slice(0, 3);

var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities); */

// ============================================================================================================
// * Combine Two Arrays Using the concat Method
// ! Concatenation means to join items end to end.
// JavaScript offers the concat method for both strings and arrays that work in the same way.

// For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array.
// !  It returns a new array and does not mutate either of the original arrays.
//  Here's an example:
// [1, 2, 3].concat([4, 5, 6]); // [1, 2, 3, 4, 5, 6]

// full coding
/* let nonMutatingConcat = (original, attach) => original.concat(attach);

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second); // [ 1, 2, 3, 4, 5 ] */

// ============================================================================================================
// * Add Elements to the End of an Array Using concat Instead of push
// ! Functional programming is all about creating and using non-mutating functions.
// The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays.

// Compare concat to the push method.
// push adds an item to the end of the same array it is called on, which mutates that array.
// Here's an example:
/* var arr = [1, 2, 3];
arr.push([4, 5, 6]); */
// arr would have a modified value of [1, 2, 3, [4, 5, 6]], which is not the functional programming way.
// ! concat offers a way to add new items to the end of an array without any mutating side effects.

// full coding
/* let nonMutatingPush = (original, newItem) => original.concat(newItem);

var first = [1, 2, 3];
var second = [4, 5];

nonMutatingPush(first, second); // [ 1, 2, 3, 4, 5 ]
 */
// ============================================================================================================
// * Use the reduce Method to Analyze Data
// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript.
// !  You can solve almost any array processing problem using the reduce method.

// The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce.
// The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array).
// ! This is achieved via a callback function that is called on each iteration.

/* The callback function accepts four arguments.
1. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration,
2. the second is the current element being processed,
3. the third is the index of that element and the fourth is the array upon which reduce is called. */

// In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator
// If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first

// See below for an example using reduce on the users array to return the sum of all the users' ages.
// For simplicity, the example only uses the first and second arguments.
/* const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); // 64 */

// In another example, see how an object can be returned containing the names of the users as properties with their ages as values.
/* const users = [
  { name: "John", age: 34 },
  { name: "Amy", age: 20 },
  { name: "camperCat", age: 10 },
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj); // { John: 34, Amy: 20, camperCat: 10 }.*/

// Full Coding

// The global variable
/* var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList){

  var averageRating = watchList
      // find Director by Nolan only
      .filter(movie => movie.Director === "Christopher Nolan")
      // catch only rating with Nolan Director Movie
      .map(movie => parseFloat(movie.imdbRating))
      // find Average sum all / movie total
      .reduce((obj, movie) => obj + movie) /
      watchList.filter(movie => movie.Director === "Christopher Nolan").length



  return averageRating;
}
console.log(getRating(watchList)); // 8.675 */

// ============================================================================================================
// * Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it.
// A square number is the result when a number has been multiplied by itself example: 5 => 5*5 = 25
/* const squareList = (arr) => {

  return (arr = arr
    .filter((num) => num >= 0 && Number.isInteger(num))
    .map((num) => num * num));

};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]); //  [ 25, 9 ] */

// ============================================================================================================
// * Sort an Array Alphabetically using the sort Method
// ! The sort method sorts the elements of an array according to the callback function.
// The sort will convert element to string

/* function ascendingOrder(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}
ascendingOrder([1, 5, 2, 3, 4]); // [1, 2, 3, 4, 5] */

// =========================================================

/* function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(["l", "h", "z", "b", "s"]); // ['z', 's', 'l', 'h', 'b'] */

// Sort also work on array of object.

/* const products = [
  {
    name: 'laptop',
    price: 1000
  },
  {
    name: 'desktop',
    price: 1500
  },
  {
    name: 'phone',
    price: 500
  }

];

products.sort((a,b) => {
  return a.price - b.price;
});

console.log(products); */
// {name: "phone", price: 500}
// {name: "laptop", price: 1000}
//  {name: "desktop", price: 1500}


// JavaScript's default sorting method is by string Unicode point value, which may return unexpected results
//  Therefore, it is encouraged to provide a callback function to specify how to sort the array items.

// When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction:
/* 1. If compareFunction(a,b) returns a < 0 for two elements a and b, then a will come before b. // a b
2. If compareFunction(a,b) returns a > 0 for two elements a and b, then b will come before a. // b a
3. If compareFunction(a,b) returns a === 0 for two elements a and b, then a and b will remain unchanged. // remin unchanged */

//  sort the elements of arr in alphabetical order
/* function alphabeticalOrder(arr) {

  return arr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });

}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"])); */


// * Return a Sorted Array Without Changing the Original Array
// ! A side effect of the sort method is that it changes the order of the elements in the original array.
// In other words, it mutates the array in place.
// One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

// Full code
/* var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let dupeArray = [...arr];
  dupeArray.sort((a, b) => a - b);

  // this also work
  //  return [].concat(arr).sort(function(a, b) {
  //   return a - b;
  // });

  return dupeArray;
}
console.log(nonMutatingSort(globalArray));  */

// ============================================================================================================
// * Split a String into an Array Using the split Method
// ! The split method splits a string into an array of strings.
//  It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression.
// delmitier = pemisah | pembatas
// For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

// For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.
/* var str = "Hello World";
var bySpace = str.split(" "); // ["Hello", "World"]

var otherString = "How9are7you2today";
var byDigits = otherString.split(/\d/); // ["How", "are", "you", "today"]. */


// Note that below case the words are not always separated by spaces, and the array should not contain punctuation.

let splitify = (str) => str.split(/\W/);

console.log(splitify("Hello World,I-am code"));

// ============================================================================================================
// * Combine an Array into a String Using the join Method
// ! The join method is used to join the elements of an array together to create a string.
//   It takes an argument for the delimiter that is used to separate the array elements in the string.

// Here's an example:
/* var arr = ["Hello", "World"];
var str = arr.join(" "); // Hello World */

//  Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str.

/* function sentensify(str) {
  // split String (delete "-") into array
  const splitString = str.split(/\W/);
  // join array
  return splitString.join(" ");
}

console.log(sentensify("May-the-force-be-with-you")); */