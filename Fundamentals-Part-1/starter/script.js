/*let js = "amazing";
if (js === "amazing") console.log("JS is fun");

let firstName = 'Animesh';
console.log(firstName);

let last#name = 'Mohanty'; => error in naming the variable
console.log(last#name);*/

/*// javascript is executed from top to bottom. then why all the previous logs are not shown in the console

//'undefined' data type
let year;
console.log(year); // => undefined
console.log(typeof year); // => undefined
// so both the variable and value are undefined

const now = 2024;
const ageJonas = now - 1996;
console.log(ageJonas);

const firstName = "Jonas";
const lastName = "Sahoo";

console.log(firstName + " " + lastName);

let x = 15;
x += 10; // x = x + 15
console.log(x);
*/

/*let x, y;
x = y = 25 - 10 - 5; //assighment operators are executed from right to left
console.log(x, y);

const age = 12;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can get a driving license 🚗");
} else {
  console.log("Sarah is not old enough");
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// Type conversion => manually converting the type of data
let num1 = "1991";
console.log(num1);
console.log(Number(num1));

console.log(String(1992));

// Type Coercion => JS automatically converts the data type

console.log("7" + "5");
console.log("7" - "5");
console.log("8" * "5");
console.log("8" / "2");

// Other than the plus operator, all other operators convert the strings into numbers

// 5 falsy values: 0, "", undefined, null, NaN

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}*/

/*const age = prompt("What is your age?");
//the prompt function always returns a string
console.log(typeof age); //=> string*/

// Switch statement
const day = "monday";
switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday": // the below code will be executed for both wednesday and thursday
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record Videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

// Ternary operator
const age = 15;
const drink = age >= 18 ? "wine" : "water";
console.log(`I can drink ${drink}`);
console.log(`I can drink ${age >= 18 ? "wine" : "water"}`); // => we can use the conditional expression directly inside the template literal but it is not possible with if-else statement
