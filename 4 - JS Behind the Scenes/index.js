"use strict";

/*var a = 100;
var f = 50;
const b = 20;

function sum(c, d) {
  var x = 1;
  const y = 2;
  return c + d;
}

console.log(sum(3, 5));

const hello = () => {
  console.log("hello");
  console.log(this); // surrounding function of this arrow function is the global execution context
};
hello();

function greeting() {
  console.log("good morning");
  console.log(this);
}
greeting();*/

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // solution - 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
};

console.log(this);
jonas.calcAge();

// PRIMITIVES VS OBJECTS
let lastName = "Mohanty";
let oldLastName = lastName;
lastName = "Jena";
console.log(lastName, oldLastName);

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 37,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log(jessica);
console.log(marriedJessica);

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 37,
  family: ["Alice", "Dave"],
};
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
jessicaCopy.family.push("Bob");
console.log(jessica2);
console.log(jessicaCopy);
