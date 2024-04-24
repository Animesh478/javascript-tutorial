'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*// Destructuring an array
****************************
const [a, b, c] = [1, 2, 3];
console.log(a, b);
console.log(c);

// Switching items or variables using destructuring
let main = 'chicken';
let secondary = 'salad';

[secondary, main] = [main, secondary];
console.log(main, secondary);

const nested = [2, 4, [5, 6]];

// Destructuring of nested array
const [i, j, [k, l]] = [2, 3, [5, 6]];
console.log(i, j, k, l);

// Default values: if we don't know the length of the array
const [p = 1, q = 1, r = 1] = [5, 6];
console.log(p, q, r); // r=1, since we have defined a default value for 'r', otherwise it would be undefined

// Example
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);*/

/*Destructuring Objects
 *************************/
