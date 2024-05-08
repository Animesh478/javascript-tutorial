'use strict';
// Default Parameters

/*const bookings = [];*/

/*const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  // Using object literal
  const booking1 = {
    flightNum: flightNum,
    numPassengers: numPassengers,
    price: price,
  };

  // Creating object using enhanced object literal where we donot have to state the property and their value separately
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};*/

/*createBooking('Boeing478', 200, 100);
createBooking('Boeing478', 200);

// if we want to skip a parameter: use undefined
createBooking('LH45', undefined, 500);

// We can also pass any expression(something that returns a value) as the value for a default parameter*/

/*const flight = 'LH542';
const jonas = {
  name: 'Jonas Dave',
  passport: 125364789,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 125364789) {
    console.log('Checked In');
  } else {
    console.log('Wrong Passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(jonas);
checkIn(flight, jonas);
// In JS we donot have pass by reference*/

// Functions taking functions as arguments
/****************************************** */
/*const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...others] = str.split(' ');
  return [firstWord.toUpperCase(), ...others].join(' ');
};

const transform = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
};

transform('JavaScript is the best', upperFirstWord);
transform('JavaScript is the best', oneWord);

function sum(...num) {
  let total = 0;
  for (const i of num) {
    total = total + i;
  }
  return total;
}

function calculate(arr, fn) {
  console.log(fn(...arr));
}
calculate([1, 2, 3], sum);
*/

// Function returning function
/****************************** */
/*const greet = greeting => {
  return name => {
    console.log(`${greeting}, ${name}`);
  };
};
greet('Hello')('Johnathon');
greet('Hello')('Winston');*/

// FUNCTION METHODS - CALL AND APPLY METHODS
/*const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}` });
  },
};

lufthansa.book(239, 'Jonas');
lufthansa.book(555, 'James');

console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// this variable in a regular function call is undefined. but we can give the this variable a value(object) by using the call, apply and bind method*/

// CALL METHOD
/************** */
/*book.call(eurowings, 895, 'James Bond');
console.log(eurowings);

book.call(lufthansa, 239, 'Cooper');

const obj1 = {
  name: 'Animesh',
  age: 28,
};

const greeting = function () {
  console.log(`hey, ${this.name}`);
};
greeting.call(obj1);*/

// APPLY METHOD (not used frequently in modern javascript)
/**************** */
// it takes an array of function arguments
/*book.apply(lufthansa, [887, 'Alice']);
book.call(eurowings, ...[778, 'Monk']);*/

// BIND METHOD
/*************** */
/*const bookEW = book.bind(eurowings); //=> it returns a new function where the this keyword is always bound to eurowings object

bookEW(452, 'Josh');
bookEW(442, 'Joshua');

const bookLF = book.bind(lufthansa);
bookLF(885, 'Lulu');

// some of the arguments are already fixed
const bookLF887 = book.bind(lufthansa, 887);
bookLF887('Elijah');

// bind method with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application of bind method
const addTax = function (tax, value) {
  return value + value * tax;
};
console.log(addTax(0.2, 100));

// if we want to fix the tax part
const addTax23 = addTax.bind(null, 0.23);
console.log(addTax23(100));*/

/*const calculateTax = function (tax) {
  return function (value) {
    return value + value * tax;
  };
};

const addVat = calculateTax(0.23);

console.log(addVat(100));*/

// CODING CHALLENGE - 1
/*A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
/*const poll = {
  question: `What is your favourite programming language?`,
  options: [`0:Javascript`, `1:Python`, `2:Rust`, `3:C++`],
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const response = prompt(
    `${this.question}\n${this.options.join('\n')}\n(Write option number)`
  );
  // checking for valid response
  if (response === null) {
    return;
  } else {
    const responseNum = Number(response);

    if (responseNum <= 3 && responseNum >= 0) {
      // registering the answer
      this.answers[responseNum]++;
    } else {
      alert('Enter valid option');
    }
  }
  this.displayResults('string');
  this.displayResults();
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults = function (type = 'array') {
  if (type === 'array') {
    console.log(this.answers);
  } else if (type === 'string') {
    console.log(`Poll results are ${this.answers.join(',')} `);
  }
};

const displayResults = poll.displayResults;
displayResults.call({ answers: [5, 2, 3] }, 'string');
*/
// IIFE
/*(function () {
  console.log('this function will never run again');
})();
*/

// CLOSURE
/************ */

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();
