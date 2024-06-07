const arr = [1, 2];
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

// FACTORY FUNCTION : one way of creating objects
const makeColor = function (r, g, b) {
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

// shortcoming of using factory functions:
// whenever we create a new object we also create the same methods for each object.
// the methods are defined on every single object that we create

// CONSTRUCTOR FUNCTION
/************************ */

const Person = function (name, age) {
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
