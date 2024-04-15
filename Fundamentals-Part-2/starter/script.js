"use strict";

/*let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // strict mode can catch the error with the wrong variable name
if (hasDriverLicense) console.log("I can drive");*/

//----------------
// Functions
//----------------
/*function fruitProcessor(apples, oranges) {
  //   console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const mixedJuice = fruitProcessor(5, 2);
console.log(mixedJuice);

// Function declaration
//---------------------
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

console.log(calcAge1(1996));

// Function expression
//----------------------
const calcAge2 = function (birthYear) {
  // we store the function body inside the calcAge2 variable
  return 2037 - birthYear;
};

console.log(calcAge2(1995));

//-----------------
// Arrow function
//-----------------

let calcAge3 = (birthYear) => 2037 - birthYear;
console.log(calcAge3(1998));

const yearsUntilRetirement = (birthYear) => {
  const age = 2024 - birthYear;
  return 60 - age;
};
console.log(yearsUntilRetirement(1996));*/

//----------
// ARRAYS
//----------

/*const calcAge = function (birthYear) {
  return 2024 - birthYear;
};

const years = [1991, 1995, 2001, 2006];

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const newLength = years.push(2005); // it pushes an element to the end of an array
console.log(years);
console.log(newLength);

//-----------
// OBJECTS
//-----------

const jonas = {
  firstName: "Jonas",
  lastName: "Jena",
  age: 45,
  job: "teacher",
  friends: ["Sam", "Eon", "Itzu"],
  drivingLicense: false,
};

//--------------------------------
//Retrieving data from the object
//--------------------------------
/*console.log(jonas.age); //using the dot operator to retrieve data from the object
console.log(jonas["job"]); //using the bracket notation to retrieve data from the object. we can use any expression inside the square bracket just like below example

const nameKey = "Name";
console.log(jonas[`first${nameKey}`]);

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age"
);
console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Wrong request");
}*/

//-------------------------
//Adding data to the object
//-------------------------

/*jonas.birthYear = 1990;
console.log(jonas);

jonas["mail"] = "xyz@gmail.com";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas["friends"].length} friends, and his best friend is called ${jonas["friends"][1]}`
);

/*jonas.calcAge = function () {
  console.log(this);
  return 2024 - this.birthYear; //this keyword
};*/

/*jonas.calcAge = function () {
  this.ageJonas = 2024 - this.birthYear;
  return this.ageJonas;
};

console.log(jonas);
console.log(jonas.calcAge());

// Challenge
jonas.summary = function () {
  return `${this.firstName} is a ${this.age}-year old teacher, and he has ${
    this.drivingLicense ? "a" : "no"
  } driving license`;
};
console.log(jonas.summary());*/

//--------------
//Loops
//--------------
// for loop keeps running until the condition is TRUE
/*for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let newArr = [];
const jonasArray = ["Jonas", 28, "teacher", [1, 2, 3]];
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
  //Filling arrays: following 2 ways to fill an array
  // newArr[i] = typeof jonasArray[i];
  newArr.push(typeof jonasArray[i]);
}
console.log(newArr);

//-------------------------------
// Continue and Break Statements
//-------------------------------
// Printing the elements which are string
let strArr = [];
for (let i = 0; i < jonasArray.length; i++) {
  if (typeof jonasArray[i] !== "string") continue;
  strArr.push(jonasArray[i]);
}
console.log(strArr);

// Stop pushing elements to array after the first encounter of a number
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
  if (typeof jonasArray[i] === "number") break;
}*/

//-------------------------------
//Looping over an array backwards
//-------------------------------

/*const jonasArray = ["Jonas", 28, "teacher", [1, 2, 3]];
for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}*/

//----------------------------------------------------
//WHILE LOOP - very useful when we donot know for how long the loop will run
//----------------------------------------------------

/*let dice = Math.floor(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.floor(Math.random() * 6) + 1;
}
*/
// calculate the temp amplitude
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Undertstand the problem
// -what is temp amplitude? => difference between the highest and the lowest temp
// -how to find the max or min temperatures? =>
//

// 2) Breaking it into sub problems
// - how to ignore errors
// - find max value in temp array
// - find min value
// - subtract min from max and return it

/*const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp === "string") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2: function should now receive 2 arrays of temps
// solution: merge two arrays in the beginning

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp === "string") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([5, 6, 7], [8, 1, 3]);
console.log(amplitudeNew);
*/
