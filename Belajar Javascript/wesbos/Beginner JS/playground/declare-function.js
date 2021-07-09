console.log('it works!!');
// ====================================================================
//                      function Declaration
// ====================================================================

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// ====================================================================
//                       Anonymous Function
// ====================================================================

// function (firstName) {
//   return `Dr. ${firstName}`;
// }

// ====================================================================
//                      Function Expression
// ====================================================================
// store a function as value in variable

//

// Hoisting = Hoisting is JavaScript's default behavior of moving declarations to the top.

// ====================================================================
//                          Arrow Function
// ====================================================================

// const inchToCM = (inches) => inches * 2.54;

// default
// const add = function (a, b = 3) {
//   const total = a + b;
//   return total;
// };

// Arrow
// const add = (a, b = 3) => a + b;

// returning an object

// default
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// Arrow
// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// ====================================================================
//                          IIFE
// ====================================================================
// Immediatly Invoked Function Expression
// Immediatly Run

// (function (age) {

//   return `YOu are COol and ${age}`;
// })(10);

// ====================================================================
//                          Methods
// ====================================================================
/*  eslint-disable */
const ariz = {
  name: 'Arrizky Hasya Pratama',
    // Method
  sayHi: function(){
    console.log('Hay Ariz');
    return 'Hay Ariz';
  },
    // Shorthand Method
  yell(){
      console.log('Hey Arizzz');
  },
    // Arrow Function
  whisperHi: () => {
      console.log('Hiiii its meee ASMR Darlingg!!');
  },
};

// ====================================================================
//                          Callback Functions
// ====================================================================

// Click Callback
const button = document.querySelector('.clickMe');

button.addEventListener('click', function() {
    console.log('Good One!!!!');
});

// timer Callback
setTimeout(ariz.whisperHi, 2000);

setTimeout(function() {
    console.log('Hey Broo!!!');
}, 1000);
