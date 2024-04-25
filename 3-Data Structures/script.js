'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// we donot have to write the property name manually, we can now compute property names
const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const hours = {
  [days[3]]: {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //openingHours: hours,
  // enhanced object literal
  hours,

  orderDelivery: function ({ starterIndex = 1, mainIndex = 0, address, time }) {
    // here we are passing an object as an argument and then immediately destructuring it just like props in React
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will reach your location ${address} at ${time}`
    );
  },
  // new way of writing methods
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant);

/*// Passing an object as a parameter to the function
restaurant.orderDelivery({
  time: '22:30',
  address: 'Mahanadi Vihar',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '11:00',
  address: 'Kalpana',
});*/

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
/*const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// If we want the variable names to be different from the property names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 100;
let b = 200;

const obj = { a: 78, b: 49 };
({ a, b } = obj); // Wrap the entire code in parenthesis
console.log(a, b);

// Destructuring of Nested Objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);*/

/******************************************/

// Spread Operator
/***************************** */
/*let arr = [1, 2, 3];
console.log(...arr);
console.log([5, 6, ...arr]);

// Shallow Copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

/*const ingredients = [
  prompt('Ingredient 1'),
  prompt('Ingredient 2'),
  prompt('Ingredient 3'),
];

restaurant.orderPasta(...ingredients);*/

// Making a new object from old object using spread operator
/*const newRestaurant = { ...restaurant, foundedIn: 1999 };
console.log(newRestaurant);

// Making shallow copy of an object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Faltu Restaurant';
console.log(restaurant.name);
console.log(restaurantCopy.name);*/

/* Rest Operator */
/*********************** */

// 1) Rest operator while destructuring
/*const [a, b, ...others] = [1, 2, 5, 6]; // used on the left side of "=" while destructuring an array
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Rest operator with objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

//2) Rest operator with functions
const add = function (...param) {
  let sum = 0;
  for (let i = 0; i < param.length; i++) {
    sum = sum + param[i];
  }
  return sum;
};
console.log(add(2, 3));
console.log(add(4, 5, 6, 7));

const x = [23, 5, 7];
console.log(add(...x)); // here we spread the 'x' array and then condensed it into the 'param' array using the rest operator

restaurant.orderPizza('mushrooms', 'olives', 'pepperoni');*/

// Short-circuiting
/******************** */

// Short-circuiting with the OR operator

/*console.log(3 || 'Jonas');
console.log(0 || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || null || 23);

// we can also use short-circuiting in place of ternary operator
restaurant.numGuests = 23;

const guests2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests2);

const guests = restaurant.numGuests || 10;
console.log(guests);

// but both of the above solutions will not work when numGuests = 0, because it is a falsy value

// Short-circuiting with the AND operator

console.log(3 && 'Jonas');
console.log(0 && 'Jonas');
console.log(true && 0);
console.log(undefined && null);

if (restaurant.orderPizza) {
  restaurant.orderPizza('chicken', 'olives');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom');*/

// Nullish coalescing operator
/****************************** */
/*restaurant.numGuests = 0;
const guests = restaurant.numGuests ?? 10;
console.log(guests);*/

// Logical Assignment Operators
/******************************** */
/*const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La De Susy',
  owner: 'Pablo',
};*/

/*rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests = rest1.numGuests || 10;
console.log(rest1);
console.log(rest2);*/

// Logical OR operator: it assigns a value to a variable if that variable is currently falsy
/*rest2.numGuests ||= 30;
rest1.numGuests ||= 10;

console.log(rest1);
console.log(rest2);*/

// Logical nullish coalescing operator

/*const rest1 = {
  name: 'Capri',
  numGuests: 0,
};
const rest2 = {
  name: 'La De Susy',
  owner: 'Pablo',
};

rest1.numGuests ??= 10;
rest2.numGuests ??= 20;

console.log(rest1);
console.log(rest2);*/

//Logical AND operator: it assigns a value to a variable if it is currently truthy
/*rest1.owner &&= 'Anonymous';
rest2.owner &&= 'Anonymous';

console.log(rest1);
console.log(rest2);*/

// Coding Exercise - 1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};*/

// const players1 = game.players[0];
// const players2 = game.players[1];

/*// task-1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// task-2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// task-3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// task-4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// task-5
const { team1, team2, x: draw } = game.odds;
console.log(team1, team2, draw);

// task-6
const printGoals = function (...players) {
  let totalGoals = 0;
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
    totalGoals += 1;
  }
  console.log(totalGoals);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// task-7
console.log(game.odds.team1 < game.odds.team2 && game.team1);
console.log(game.odds.team1 > game.odds.team2 && game.team2);*/

//for-of loop
/************** */
/*const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) {
  console.log(item);
}

// array.entries() method
for (const item of menu.entries()) {
  const [index, dish] = item;
  console.log(`${index + 1}: ${dish}`);
}

const arr = ['cat', 'dog', 'lion'];
console.log(...arr.entries());

for (const [index, animal] of arr.entries()) {
  console.log(`${index + 1}: ${animal}`);
}*/

// Optional Chaining
/************************ */
/*const obj1 = {
  hours: {
    fri: { open: 13, close: 23 },
    sat: { open: 10, close: 20 },
  },
};

console.log(obj1.hours);
console.log(obj1.hours.mon);
// console.log(obj1.openingHours.mon);
console.log(obj1.openingHours?.mon);

for (const day of days) {
  console.log(`On ${day}, we open at ${hours[day]?.open ?? 'closed'}`);
}

// Optional chaining for methods
console.log(
  restaurant.orderPasta?.('chicken', 'olive oil', 'rosemary') ??
    'Method doesnot exist'
);

console.log(restaurant.order?.() ?? 'Method doesnot exist');

console.log(
  restaurant.orderDelivery?.({ address: 'cuttack', time: 22 }) ??
    'method doesnot exist'
);

// Arrays and optional chaining
const users = [{ name: 'Jonas', age: 20 }];
console.log(users[1]?.name ?? 'user doesnot exist');*/
