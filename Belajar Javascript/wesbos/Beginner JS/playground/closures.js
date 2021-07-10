console.log(`it works`);

// function outer() {
//   const outerVar = 'Halo saya outer Var!';
//   // inner function, a closure
//   function inner() {
//     const innerVar = 'Halo saya inner var!';
//     console.log(innerVar);
//     // use variable derclared in the parent function
//     console.log(outerVar);
//   }

//   //   inner(); // call child function
//   return inner;
// }

// // outer();
// const innerFunction = outer();
// innerFunction();

// ===============================================================

// outer scope
// function createGreeting(greeting = '') {
//   const myGreet = greeting.toUpperCase();
//   // inner scope / closure
//   return function (name) {
//     return `${myGreet} ${name}`;
//   };
// }

// const sayHello = createGreeting('Hello');
// const sayOlla = createGreeting('Olla');

// console.log(sayHello('Ariz'));
// console.log(sayOlla('Hasya'));

// ===============================================================

// function createGame(nameGame) {
//   let score = 0;
//   return function win() {
//     score++;
//     return `Nama Game ${nameGame} scorenya adalah ${score}`;
//   };
// }

// const sepakBola = createGame('Sepak Bola');
