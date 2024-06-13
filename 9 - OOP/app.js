"use Strict";
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
/*
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
*/

/*class PersonCl {
  constructor(fullName, birthYear) {
    this._fullName = fullName;
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
console.log(animesh.fullName);
*/
// GETTER AND SETTER
/********************* */
/*
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
*/

/*class Circle {
  constructor(radius) {
    this.validateRadius(radius);
  }

  validateRadius(radius) {
    if (radius < 0) throw new Error("radius cannot be negative");
    else this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  get diameter() {
    return this._radius * 2;
  }

  // using the setter to validate radius
  set radius(value) {
    this.validateRadius(value);
  }
}

const c1 = new Circle(4);
const c2 = new Circle(8);

// Example 2
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [fName, lName] = name.split(" ");
    this.firstName = fName;
    this.lastName = lName;
  }
}
*/

// STATIC METHODS AND PROPERTIES
/********************************* */

/*class Cat {
  constructor(name) {
    this.name = name;
  }

  // static property on the class itself
  static species = "Felis catus";

  // static method on the class itself
  static strayCat() {
    const catNames = ["Pussy", "Guna", "Buttercup", "Panther"];
    const name = catNames[Math.floor(Math.random() * catNames.length)];

    return new Cat(name);
  }
}
*/
// OBJECT.CREATE
/***************** */

/*const PersonPrototype = {
  //=> this will be the prototype of all objects created from it
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonPrototype);
steven.init("Steven", 1996);
*/
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/
/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`Current speed is ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`Current speed is ${this.speed}`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car("Ford", 100);
*/

// INHERITANCE (one class inheriting methods from another class)
/**************************************************************** */

/*const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// linking student class to person class
Student.prototype = Object.create(Person.prototype);
// Student.prototype.__proto__ === Person.prototype

Student.prototype.introduce = function () {
  console.log(`Hi I am ${this.firstName} and studying ${this.course}`);
};
const stu = new Student("Stu", 2020, "IT");
console.dir(Student.prototype.constructor);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
};

Car.prototype.brake = function () {
  this.speed -= 5;
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed}, with a charge of ${this.charge}`
  );
};

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV("Tesla", 120, 23);
*/

// Using ES6 classes
/*class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  greet() {
    console.log(`Hi my name is ${this.firstName}`);
  }
}

const martha = new StudentCl("Martha", 2010, "CS");
*/

// Using object.create
/*const PersonProto = {
  calcAge() {
    return 2037 - this.age;
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.init("Steven", 2000);
console.log(steven);

const StudentProto = Object.create(PersonProto);
console.log(StudentProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const martha = Object.create(StudentProto);
martha.init("Martha", 2000, "CS");
console.log(martha);
*/

class Account {
  // all the properties on any instance
  // Public Fields
  owner;
  currency;
  locale = navigator.language;

  // Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log("Thanks for opening an account with us");
  }

  // get movements() {
  //   return this.#movements;
  // }

  // get pin() {
  //   return this.#pin;
  // }

  // set pin(value) {
  //   this.#pin = value;
  // }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  approveLoan() {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan()) this.deposit(val);
    return this;
  }
}

const jonas = new Account("Jonas", "EUR", 1111);
jonas.deposit(100);
jonas.withdrawal(100);
jonas.requestLoan(100);
console.log(jonas);

jonas.deposit(200).withdrawal(100).requestLoan(1000);
console.log(jonas);

class Circle {
  #radius;
  constructor(radius) {
    this.#radius = radius;
  }

  // we can access and change private fields with methods defined inside the class but we cannot directly access or change private fields from outside the class
  get radius() {
    console.log(this.#radius);
  }

  set radius(value) {
    this.#radius = value;
  }

  #privateCircle() {
    console.log("I am a private circle");
  }
}

const c = new Circle(3);
/*console.log(c.#radius); // we cannot access the #radius property from outside the class*/
c.radius = 10;
c.radius;
console.log(c);

// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  make;
  speed;

  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
  }

  brake() {
    this.speed -= 5;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}, with a charge of ${this.#charge}`
    );
    return this;
  }

  brake() {
    this.speed -= 5;
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl("Rivian", 120, 23);

// SETTER AND GETTER EXERCISE
/****************************** */
class UserProfile {
  constructor(username, email, birthdate) {
    this.validUsername(username);
    this.validEmail(email);
    this.validBirthDate(birthdate);
  }
  get username() {
    return this._username;
  }
  get email() {
    return this._email;
  }
  get birthdate() {
    return this._birthdate;
  }

  validUsername(username) {
    if (username === "") {
      throw new Error("Invalid username");
    } else {
      this._username = username;
    }
  }

  validEmail(email) {
    if (email.includes("@")) {
      this._email = email;
    } else {
      throw new Error("Invalid email");
    }
  }

  validBirthDate(date) {
    const dateString = new Date(date);
    const [year, month, day] = date.split("-").map((el) => Number(el));
    if (
      dateString.getFullYear() !== year ||
      dateString.getMonth() + 1 !== month ||
      dateString.getDate() !== day
    ) {
      throw new Error("Invalid birth date");
    } else {
      this._birthdate = date;
    }
  }

  set username(val) {
    this.validUsername(val);
  }

  set email(val) {
    this.validEmail(val);
  }

  set birthdate(val) {
    this.validBirthDate(val);
  }
}

const user = new UserProfile("animesh", "abc@gmail.com", "2000-01-21");
console.log(user);

// const d = new Date("2023-05-31");
// console.log(d);

// const [year, month, day] = "2023-05-31".split("-").map((el) => Number(el));
// console.log(day, month, year);
// console.log(d.getFullYear());
// console.log(d.getMonth());
// if (
//   d.getFullYear() !== year ||
//   d.getMonth() + 1 !== month ||
//   d.getDate() !== day
// ) {
//   console.log(false);
// } else {
//   console.log(true);
// }
