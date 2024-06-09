/*const arr = [1, 2];
console.log(arr);
console.log(Array.prototype);

const obj = {
  city: "madrid",
  greet: function () {
    console.log("hello from madrid");
  },
  message() {
    console.log(`Welcome to ${this.city}`);
  },
};

console.log(obj.prototype);
console.log(Object.getPrototypeOf(arr)); // to get the prototype of an object
*/

// FACTORY FUNCTION : one way of creating objects
/***************************************************** */
/*const makeColor = function (r, g, b) {
  const color = {}; // creating an empty object

  // filling the object with properties and methods
  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = function () {
    const { r, g, b } = this;
    console.log(`rgb(${r}, ${g}, ${b})`);
  };
  return color;
};

const color1 = makeColor(200, 155, 220); // making a color object
color1.rgb();
*/
// shortcoming of using factory functions:
// whenever we create a new object we also create the same methods for each object.
// the methods are defined on every single object that we create

// CONSTRUCTOR FUNCTION
/************************ */

/*const Person = function (name, age) {
  console.log(this);
  this.name = name;
  this.age = age;
};

const jonas = new Person("Jonas", 28);
console.log(jonas);

// to add methods to the Person.prototype object
Person.prototype.greet = function () {
  console.log(`Hi, I am ${this.name}`);
};

jonas.greet();

const betu = new Person("Betu", 25);
betu.greet();

const sum = function (a, b) {
  return a + b;
};
*/
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.accelerate();
car1.brake();
*/

// ES6 CLASSES
/************** */
class Color {
  constructor(r, g, b) {
    // this function is executed whenever a new instance of the class is created
    this.r = r;
    this.g = g;
    this.b = b;
  }
  // Adding methods to the prototype
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
}
const c1 = new Color(200, 150, 210);
console.log(c1.rgb());

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // defining methods on the .prototype property of the class
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  // set a property that already exists
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert("Please enter full name");
  }

  get fullName() {
    return this._fullName;
  }
}

// Creating instances from the class
const animesh = new PersonCl("Animesh Mohanty", 1996);
console.log(animesh);
animesh.calcAge();

// GETTER AND SETTER
/********************* */

const account = {
  name: "Jonas",
  movements: [200, 300, 500, 666],

  total() {
    return this.movements.reduce((acc, mov) => (acc = acc + mov), 0);
  },

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.total());
console.log(account.latest);

account.latest = 400;
console.log(account.movements);
console.log(account);
