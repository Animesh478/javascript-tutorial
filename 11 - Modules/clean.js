const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit = function (limits, user) {
  return limits[user] ? limits[user] : 0;
};

const addExpense = function (state, limit, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase();

  return value <= getLimit(limit, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};
const budget1 = addExpense(budget, spendingLimits, 20, 'Pizza 🍕');

const budget2 = addExpense(
  budget1,
  spendingLimits,
  10,
  'Going to movies 🍿',
  'Matilda'
);

const budget3 = addExpense(budget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpense = function (state, limit) {
  return state.map(entry => {
    return entry.value < -getLimit(limit, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
  // for (const entry of state) {
  //   if (entry.value < -getLimit(limit, entry.user)) {
  //     entry.flag = 'limit';
  //   }
  // }
};
const newBudget = checkExpense(budget3, spendingLimits);
console.log(newBudget);

const bigExpenses = function (state, limit) {
  return state
    .filter(entry => {
      return entry.value <= -limit;
    })
    .map(entry => `${entry.description.slice(-2)}`)
    .join('/');
  /*let output = '';
  for (const entry of budget3) {
    // if (entry.value <= -limit) {
    //   output += `${entry.description.slice(-2)} +  / `; // Emojis are 2 chars
    // }
    output =
      entry.value <= -limit
        ? output + `${entry.description.slice(-2)} / `
        : output;
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);*/
};

console.log(budget3);
console.log(bigExpenses(budget3, 100));
