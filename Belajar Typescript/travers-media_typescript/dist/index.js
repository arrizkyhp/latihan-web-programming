"use strict";
// Basic Types
// =============================================
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
// No error cause (any)
x = 12;
// Type Array with number value
let ids = [1, 2, 3, 4, 5];
// ids.push('Hello') // Error because push string
let arr = [1, "hello", true];
// Tuple
// =============================================
let person = [1, "Hello", false];
// Tuple Array
let employee;
employee = [
    [1, "Bandung"],
    [2, "Jakarta"],
    [3, "Batam"],
    // Error
    // [true, "Bogor"]
];
// Union
// =============================================
// String and number
let idUnion = 22;
idUnion = "22";
// Enum
// =============================================
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; // 3
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right"; // 4
})(Direction2 || (Direction2 = {}));
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction2.Left); // 3
console.log(Direction1.Up); // 0
console.log(Direction3.Right); // Right
// Objects
// =============================================
// method 1
const user = {
    id: 1,
    name: "John"
};
const user2 = {
    id: 1,
    name: 'Gina'
};
// Type Assertion
// =============================================
let cid = 1;
// method 1
let customerId = cid;
// Error
// customerId = true
// method 2
let customerId2 = cid;
// Functions
// =============================================
function tambah(x, y) {
    return x + y;
}
// Error
// console.log(tambah(1, '2'))
console.log(tambah(1, 2)); // 3
// Void
// =============================================
const log = (message) => {
    console.log(message);
};
log('Hello'); // Hello
const user3 = {
    id: 1,
    name: 'Gina'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(5, 7)); // 12
console.log(sub(7, 5)); // 2
// Classes
// =============================================
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const leo = new Person(1, "Leonardo Davinci");
const mike = new Person(2, "Michael Angelo");
console.log(mike);
console.log(leo.register()); // Leonardo Davinci is now registered
