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
// This adds different behavior to an object.

/* let dog = {
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
// * Use a Constructor to Create Objects
// ! The new Operators is used when calling a constructor.
// This tells JavaScript to create a new instance of Dog called hound.

/* function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

const hound = new Dog(); */

// =========================================================================================
// * Extend Constructors to Receive Arguments
// To more easily create different Dog objects, you can design your Dog constructor to accept parameters.
// The constructor is more flexible
// ! Constructor group objects together based on shared characterisrics and behavior and define a blueprint that automates their creation.

/* function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

const terrier = new Dog("Alfredo", "White"); */

// =========================================================================================
// * Verify an Object's Constructor with instanceof
// Anytime a constructor function creates a new objectm that object is said to be an instance of its constructor
// instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the costructor.

/* function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

const myHouse = new House(3);

myHouse instanceof House; //true */

// =========================================================================================
// * Understand Own Properties
// In the last exmaple Dog constructor defines 3 properties: name, color, and numLegs.
// that 3 properties are called own properties, because they are defined directly on the instance object.
//  Every instance of Dog will have its own copy of theses properties.

/* function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // [ 'name', 'numLegs' ] */

// =========================================================================================
// * Use Prototype properties to reduce duplicate code
// since numLegs will probably have the same value for all instance of Dog, you essentially have a duplicated variable numLegs inside each Dog instance.
// A better way is to use the prototype of Dog.
// ! Properties in the prototype are shared among ALL instances of Dog.
// ! Put prototype outside Constructor.

// Own properties are defined directly on the object instance itself
// prototype properties are defined on the prototype.

/* function Dog(name) {
  this.name = name; // own property
}

Dog.prototype.numLegs = 4; // prototype property

let beagle = new Dog("Snoopy"); */

// =========================================================================================
// * Iterate Over All Properties

// here is how to seperate ownProps and prototype to the array using Iterate

/* function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
    // if has ownprops
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  }
    // if has prototype
  else {
    prototypeProps.push(property);
  }
}

console.log(ownProps); // [ 'name' ]
console.log(prototypeProps); // [ 'numLegs' ] */

// =========================================================================================
// * Understand the Constructor Property

/* let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); // true
console.log(beagle.constructor === Dog); // true */

// ! The constructor property is a reference to the constructor function that created the instance.
// ! The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is.

/* function Dog(name) {
  this.name = name;
}

function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
} */

// =========================================================================================
// * Move the Prototype to a New Object

// prototype individually:
/* Dog.prototype.numLegs = 4;

// this will becomes tedious after more than a few properties.
Dog.prototype.eat = function () {
  console.log("nom nom nom");
};

Dog.prototype.describe = function () {
  console.log("My name is " + this.name);
}; */

// ! A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once.

/* Dog.prototype = {
  numLegs: 4,
  eat: function () {
    console.log("nyom nyom nyom");
  },
  describe: function () {
    console.log(`My name is ${this.name}`);
  },
}; */

// * Remember to Set the Constructor Property When Changing the Prototype
// There is one crucial side effect of manually setting the prototype to a new project.
// ! It erases the constructor property!
// This property can be used to check which constructor function created the instance but since the property has been overwritten, it now gives false results

/* dog.constructor === Dog; // false
dog.constructor === Object; // true
dog instanceof Dog; // true */

// ! to fix this, whenever a prototype is manually set to a new object  remember to define the constructor property:

/* Dog.prototype = {
    constructor: Dog, // this fix
    numLegs: 4,
    eat: function () {
        console.log("nyom nyom nyom");
    },
    describe: function () {
        console.log(`My name is ${this.name}`);
    },
};
 */

// =========================================================================================
// * Understand Where an Object’s Prototype Comes From
// An object inherits its prototype directly from the constructor function that created it.

/* function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle); // true */

// beagle inherits its prototype from the Dog
// Show this relationship with the isPrototypeOf method above.

// =========================================================================================
// * Understand the Prototype Chain
// All Objects in JavaScript (with a few exceptions) have a prototype. Also, an object;s prototype itesly is an pbject.
// Because a protorype is an object, a prototype can have its own prototype
// in this casem the prototype of Dog,prototype is Object.prototype
// ! Object.prototype <= Dog.protoype <= beagle.prototype.
/* Object.prototype.isPrototypeOf(Bird.prototype); */
// How is this useful? You may recall the haswOwnProperty method

/* let beagle = new Dog("Snoopy");
beagle.hasOwnProperty("name"); */

// The hasOwnProperty method is defined in Object.prototype, which can be accessed by Dog.prototype, which can then be accessed by beagle.
// Dog is the supertype for beagle, while beagle is the subtype/
// Object is a supertype for both Dog and beagle.
// Object is a supertype for all objects in JavaScript.
// supertype = parent
// therefore any object can use the hasOwnPropert method.

// =========================================================================================
// * Use Inheritance So You Don't Repeat Yourself
// ! There;s a principle in a programming called Don't Repeat Yourself (DRY).
// The reason repeated code is a problem is because any changes requires fixing code in multiple places.
// This usually means more work for porgrammers and more room for errors.

// Notice in the example below that the describe method is shared by Bird and Dog

/* Bird.prototype = {
  constructor: Bird,
  describe: function () {
    console.log("My name is " + this.name);
  },
};

Dog.prototype = {
  constructor: Dog,
  describe: function () {
    console.log("My name is " + this.name);
  },
}; */

// The describe method is repeated in two places, the code can be edited to follow the DRY principle by creating a supertype called Animal

/* function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function () {
    console.log("My name is " + this.name);
  },
}; */

// since Animal includes the describe method, you can remove it from Bird and Dog:

// this is the full code example

/* function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
};

function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
}; */

// =========================================================================================
// * Inherit Behaviors from a Supertype
// This will cover how to reuse the methods of Animal inside Bird and Dog withour defining them again. it uses a technique called inheritance.

/* let binatang = new Animal(); */

// using above syntax have some disadvantages, which are too complex for the scope
// Instead, here's an alternative approach without those disadvantages:

/* let binatang = Object.create(Animal.prototype); */

// ! Objects.create(obj) creates a new object, and sets obj as the new object's prototype
// prototype is like the "recipe" for creating an object.
// By setting the prototype of binatang to be the prototype Animal, you are effectively giving the binatang instance the same "recipe" as any other instance of Animal

/* function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};


let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck instanceof Animal; // true */

// =========================================================================================
// * Set the Child's Prototype to an Instance of the parent

// Set the prototype of the subtype (or Child) in this case, Dog to be an instance of Animal (Connect Dog with Animal)

/* Dog.prototype = Object.create(Animal.prototype); */

// so now Dog and Animal connect, beagle can now use Animal properties.
// dog inherits all of Animal's including eat method
/* beagle.eat(); */

/* function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();

console.log(beagle.eat()); */

// * Reset an Inherited Constructor Property
// ! When an Object inherits its prototype from another object, it also inherits the supertype's constructor property.
// in the below example duck and all instance of Bird change it constructor into Animal Constructor.
// to fix that we can manually set the constructor property of Bird to the Bird object Back

/* function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
let duck = new Bird();
console.log(duck.constructor); // Animal

Bird.prototype.constructor = Bird; // Make it back to Bird
console.log(duck.constructor); // Bird */

// Full coding

/* function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();
console.log(duck.constructor); */

// * Add Methods After Inheritance
// ! A constructor function that inherits its prototype object from a supertype constructor function can still have its own methods in addition to inherited methods.
// for example, Dog is a constructor that inherits its prototype from Animal:

/* function Animal() {}
Animal.prototype.eat = function () {
    console.log("nom nom nom");
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; */

// In addition to what inherited from Animal, you want to add behavior that is unique to Dof objects.
// here Dog wll get a bark() function.
// Function are added to Dog prototype the same way as any constructor function

/* Dog.prototype.bark = function () {
  console.log("Woof!");
}; */

// Noew instances of Dog will have both eat() and bark() methods:
/* let beagle = new Dog();
beagle.eat();
beagle.bark(); */

// Full Coding

/* function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}


Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log("Woof!");
};


let beagle = new Dog();
 */


// * Override Inherited Methods
// ! In previous lessons, you learned that an object can inherit its behavior (methods) from another object by referencing its prototype object:
/* ChildObject.prototype = Object.create(ParentObject.prototype); */

// Then the ChildObject received its own methods by chaining them onto its prototype:
// ChildObject.prototype.methodName = function() {...};

// ! it's possible to override an inherited method.
// it's done the same way by adding a method to ChildObject.prototype using the same method name as the one to override.

// Here's an example of Bird overriding the eat() method inherited from Animal:
/* function Animal() {}
Animal.prototype.eat = function () {
  return "nom nom nom";
};
function Bird() {}

Bird.prototype = Object.create(Animal.prototype);

// Override
Bird.prototype.eat = function () {
  return "peck peck peck";
}; */

// if you have an instance let duck = new Bird(); and you call duck.eat(), this is how Javascript looks for the method on the protorype chain of duck:

/* 1. duck => is eat() defined here? No.
2. Bird => is eat() defined here? Yes. Execute it and stop searching.
3. Animal => is eat() defined here? Yes. But JavaScript stopped searching before reaching this level.
4. Object => JavScript stopped seatching before reaching this level.  */

// Full COding
/* function Bird() {}

Bird.prototype.fly = function () {
  return "I am flying!";
};

function Penguin() {}
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function () {
  return "Alas, this is a flightless bird.";
};

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly()); */

// * Use a Mixin to Add Common behavior Between Unrelated Objects
// As you have seen, behavior is shared through inheritance. However, ther are cases when inheritance is not the best solutin.
// Inheritance does not work well for unrelated objects like Bird and Airplane. They both fly, but a Bird is not a type of Airplane and Vice Versa.

// ! For unrelated objects, it's better to use mixins. A mixin allow other objects to use a collection of function.
/* let flyMixin = function (obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
}; */

// ! The flyMixin takes any object and gives it the fly method.
/* let bird = {
  name: "Donald",
  numLegs: 2,
};

let plane = {
  model: "777",
  numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane); */

// Here bird and plane are passed into flyMixin, which then assigns the fly function to each object. Now bird and plane can bot fly.
/* bird.fly();
plane.fly(); */

// Note how the mixin allows for the same fly method to be reused by unrelated objects bird and plane.

// Full coding
/* let bird = {
  name: "Donald",
  numLegs: 2,
};

let boat = {
  name: "Warrior",
  type: "race-boat",
};

// Only change code below this line
const glideMixin = function (obj) {
  obj.glide = () => console.log("Gliding, fssshhhh");
};

glideMixin(bird);
glideMixin(boat); */


// =========================================================================================
// * Use Closure to Protect Properties Within an Object form Being Modified Externally
// In the Previous, bird had a public property name. It is considered public beacuse it can be accessed and changed outside of bird definition
/* bird.name = "Duffy"; */

// The simplest way to make this public property private is by creating a variable within the constructor function.
// This change the scopt of that variable to be within the constructor function versus available globally
// ! This way the variable can only be accessed and changed by methods also within the constructor function
/* function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function () {
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount(); */

// Here getHatchedEggCount is a privilaged method, because it has access to the private  variable hatchedEgg. This is possible because hatchedegg is declared in the same context as getHatchedEggCount.
// ! In JavaScript, a function always has access to the context in which it was created. This is called closure.

// full coding
/* function Bird() {
  let weight = 15;
  this.getWeight = () => {
    return weight;
  };
}

let pigeon = new Bird();
console.log(pigeon.getWeight()); */

// =========================================================================================
// * Understand the Immediately Invoked Function Expression (IIFE)
// A common pattern in JavaScript is to execute a function as soon as it is declared:
/* (function () {
  console.log("Chirp, chirp!");
})(); */

// The function has no name and is not stord in a variable.
// The two parentheses () at the end of the function expression cause it to be immediately executed or ivoked.
// This patter is known as an immediately invoked function expression or IIFE.

// * Use an IIFE to create a Module
// ! An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module.
// for example, an earlier challenge defined two mixins:
/* function glideMixin(obj) {
  obj.glide = function () {
    console.log("Gliding on the water");
  };
}
function flyMixin(obj) {
  obj.fly = function () {
    console.log("Flying, wooosh!");
  };
} */

// we can group these mixins into a module as follows:
/* let motionModule = (function () {
  return {
    glideMixin: function (obj) {
      obj.glide = function () {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function (obj) {
      obj.fly = function () {
        console.log("Flying, wooosh!");
      };
    },
  };
})();
 */
// Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object.
// ! The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of youd code.
// heres an example using it:
/* motionModule.glideMixin(duck);
duck.glide(); */

// Full coding:
/*
let funModule = (function () {
  return {
    isCuteMixin: function (obj) {
      obj.isCute = function () {
        return true;
      };
    },
    singMixin: function (obj) {
      obj.sing = function () {
        console.log("Singing to an awesome tune");
      };
    },
  };
})(); */