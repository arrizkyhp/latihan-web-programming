// * Basic Objects

/* let dog = {
  name: "Spot",
  numLegs: 4,
}; */

// =========================================================================================
// * Dot Notation to Acces the Properties of an Object

/* let duck = {
  name: "Aflac",
  numLegs: 2,
};
console.log(duck.name); */

// Dot notation is used on the object name, duck, followed by the name of the property, name, to access the value of Aflac.

// =========================================================================================
// * Create a Method on an Object
// Object can gave a special type of property, called a method.
// ! Methods are properties that are functions.
/* // This adds different behavior to an object.

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return `This dog has ${dog.numLegs} legs.`;
  },
};

dog.sayLegs(); */

// =========================================================================================
// * Make Code more Reusable with the this. Keyword
// if use dog.name dot notation to access the value for the name property, there is a pitfall
// If the variable name changes, any code referencing the original name would need to be updated as well.
// ! A way to avoid that issues is with the this keyword.
// In the below example this refers to the objec that the method is associated with dog, if the object's name is changed to cat, it is not ncessary to find all the references to dog in the code
// It makes the code reusable and easier to read.

/* let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog.sayLegs(); */

// =========================================================================================
// * Define a Constructor Function
// ! COnstructors are functions that create new objects
// They define properties and behaviors that will belongs to the new objects.
// Think of them as blueprint for the creation of new Objects.
// ! this inside the constructor always refers to the object being created.

// Constructors follow a few conventions
/* 🎈 Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
🎈 Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
🎈 Constructors define properties and behaviors instead of returning a value as other functions might. */

/* function Dog() {
  this.name = "Alfred";
  this.color = "Gold";
  this.numLegs = 4;
} */

// =========================================================================================
// * Define a Constructor Function
// ! The new Operators is used when calling a constructor.
// This tells JavaScript to create a new instance of Dog called hound.

/* function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

const hound = new Dog(); */
