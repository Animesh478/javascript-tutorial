'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// DISPLAYING TRANSACTIONS
const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }. ${type}</div>
          <div class="movements__value">${mov}€</div>
     </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);

// DISPLAYING TOTAL BALANCE
const calcDisplayBalance = function (acct) {
  const balance = acct.movements.reduce((sum, mov) => {
    return sum + mov;
  }, 0);
  labelBalance.textContent = `${balance}€`;
  acct.balance = balance;
};
// calcDisplayBalance(account1);

// DISPLAY SUMMARY
const calcDisplaySummary = function (account) {
  const incomes = account.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov, 0);

  labelSumIn.textContent = `${incomes}€`;

  const out = account.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = account.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * account.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((sum, int) => sum + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// UPDATE UI
const updateUI = function (account) {
  // DISPLAY MOVEMENTS
  displayMovements(account);
  // DISPLAY BALANCE
  calcDisplayBalance(account);
  // DISPLAY SUMMARY
  calcDisplaySummary(account);
};

// CREATING USERNAME
/*const user = 'Steven Thomas Williams';
const username = user
  .toLowerCase()
  .split(' ')
  .map(el => {
    return el[0];
  })
  .join('');
console.log(username);*/

const createUsernames = function (accounts) {
  accounts.forEach(acc => {
    const username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(el => {
        return el[0];
      })
      .join('');
    acc.username = username;
  });
};

createUsernames(accounts);

// EVENT HANDLER
let currentAccount;

// LOGIN FUNCTIONALITY
/********************** */
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(account => {
    return account.username === inputLoginUsername.value;
  });
  // console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // DISPLAY UI AND WELCOME MESSAGE
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    updateUI(currentAccount);

    // CLEAR INPUT FIELDS
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

// TRANSFER FUNCTIONALITY
/************************* */
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(account => {
    return account.username === inputTransferTo.value;
  });

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  }

  updateUI(currentAccount);

  inputTransferAmount.value = inputTransferTo.value = '';
});

// LOAN FUNCTIONALITY
/********************** */
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  const condition = currentAccount.movements.some(mov => {
    return mov > 0.1 * amount;
  });
  if (amount > 0 && condition) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// CLOSE ACCOUNT FUNCTIONALITY
/****************************** */
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(account => {
      return account.username === currentAccount.username;
    });
    // DELETE ACCOUNT
    accounts.splice(index, 1);

    // HIDE UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

// SORT FUNCTIONALITY
let sorted = false;
btnSort.addEventListener('click', () => {
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(0, 2));
console.log(arr.slice());

// SPLICE
console.log(arr.splice(0, 2));
console.log(arr.splice(-1));
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['p', 'q', 'r', 's'];
console.log(arr2.reverse());

// CONCAT
console.log(arr.concat(arr2));
console.log([...arr, ...arr2]);
*/

// AT
/*const arr = [23, 54, 89];
console.log(arr[0]);
console.log(arr.at(0));

console.log(arr[-1]);
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// forEach method
/*movements.forEach((movement, i) => {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement} amount`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)} amount`);
  }
});*/

// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJuliaCopy = [...dogsJulia];

const checkDogs = function (arr1, arr2) {
  const arr1Copy = arr1.slice().slice(1, -1);

  const arrCombined = arr1Copy.concat(arr2);
  arrCombined.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
};

checkDogs(dogsJulia, dogsKate);
*/
// MAP METHOD
/*************** */
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsDesc = movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)} amount`;
});
console.log(movementsDesc);
*/

// FILTER METHOD
/***************** */
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);*/

// REDUCE METHOD
/****************** */
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce(function (acc, el) {
  return acc + el;
}, 0);
console.log(balance);

const max = movements.reduce((acc, curr) => {
  if (acc > curr) return acc;
  else return curr;
}, movements[0]);

console.log(max);
*/

// CODING CHALLENGE - 2
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
/*const calcAverageHumanAge = function (dogs) {
  const humanAge = dogs.map(dogAge => {
    if (dogAge <= 2) {
      return 2 * dogAge;
    } else {
      return 16 + dogAge * 4;
    }
  });
  const filteredAge = humanAge.filter(age => {
    return age >= 18;
  });
  console.log(filteredAge);
  const ageSum = filteredAge.reduce((sum, age, i, arr) => {
    return sum + age;
  }, 0);
  console.log(ageSum);

  return ageSum / filteredAge.length;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));*/

// CHAINING METHODS
/******************** */
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const depositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((acc, mov) => acc + mov, 0);
console.log(depositsUSD);*/

// FIND METHOD
/*************** */
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.find(mov => mov < 0));

for (const acct of accounts) {
  if (acct.owner === 'Jessica Davis') {
    console.log(acct);
  }
}*/

// SOME METHOD
/*************** */
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.includes(200)); // checks for equality

const abv3000 = movements.some(mov => mov > 3000);
console.log(abv3000);*/

// FLAT AND FLATMAP METHODS
/**************************** */
/*const arr = [[1, 22, 3], [4, 5, 6], 7, 0];
console.log(arr.flat());

const arrNested = [[1, [22, 3]], [4, 5, 6], 7, 0];
console.log(arrNested.flat(2));

const allMovements = accounts.map(account => account.movements).flat();
console.log(allMovements);
const totalBalance = allMovements.reduce((acc, mov) => {
  return acc + mov;
}, 0);
console.log(totalBalance);

const allMovements2 = accounts.flatMap(account => account.movements);
console.log(allMovements2);*/

// ARRAY SORTING
/****************** */
/*const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const sortedMovements = movements.sort((a, b) => {
  return a - b;
});
console.log(sortedMovements);

const sortedMovementsDesc = movements.sort((a, b) => {
  return b - a;
});
console.log(sortedMovementsDesc);
*/

// CREATING AND FILLING ARRAYS
/******************************* */
/*const x = new Array(7); // creates empty array
console.log(x);
console.log(x.length);

console.log(new Array(1, 2, 3, 4));

// fill method
// we can only use fill method on an empty array created using the array constructor
x.fill(2); // mutates the original array
console.log(x);

const y = new Array(8);
y.fill(1, 3, 7); // we can specify the begin and the end parameter
console.log(y);*/

// Array.from() method
/*********************** */
/*const a = Array.from('animesh'); // we can create arrays from other iterables
console.log(a);

const b = Array.from({ length: 7 }, () => 1);
console.log(b);

const c = Array.from({ length: 7 }, (_, i) => i + 1); // we use "_" to denote that we are not using that parameter
console.log(c);

const dice100 = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(dice100);*/

// Practice
/************ */
/*const bankDepositsSum = accounts
  .map(account => {
    return account.movements;
  })
  .flat()
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
console.log(bankDepositsSum);

const numDeposit1000 = accounts
  .flatMap(account => account.movements)
  .filter(mov => mov >= 1000).length;
console.log(numDeposit1000);

const numDeposit1000Reduce = accounts
  .flatMap(account => account.movements)
  .reduce((count, mov) => {
    if (mov >= 1000) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
console.log(numDeposit1000Reduce);

let a = 10;
console.log(a++);
console.log(a);
*/
// 3.
// return an object having sum of the deposits and withdrawals

/*const { deposit, withdrawal } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sums, mov) => {
      // mov > 0
      //   ? (sums.deposit = sums.deposit + mov)
      //   : (sums.withdrawal = sums.withdrawal + mov);
      sums[mov > 0 ? 'deposit' : 'withdrawal'] =
        sums[mov > 0 ? 'deposit' : 'withdrawal'] + mov;
      return sums;
    },
    { deposit: 0, withdrawal: 0 }
  );
console.log(deposit, withdrawal);
*/
// 4. Title case convertor
/*const convertTitleCase = function (title) {
  const exceptions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with', 'and'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(el => {
      if (exceptions.includes(el)) return el;
      else {
        return el.replace(el[0], el[0].toUpperCase());
      }
    })
    .join(' ');
  return titleCase;
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
*/
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});

console.log(dogs);

// 2.
dogs.forEach(dog => {
  if (dog.owners.includes('Sarah')) {
    dog.curFood > dog.recommendedFood
      ? console.log('It is eating too much')
      : console.log('It is eating too little');
  }
});

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => {
    return dog.curFood > dog.recommendedFood;
  })
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => {
    return dog.curFood < dog.recommendedFood;
  })
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
// "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5.
const dogExactFood = dogs.some(dog => {
  return dog.curFood === dog.recommendedFood;
});
console.log(dogExactFood);

// 6.
const checkEatingOkay = dog => {
  return (
    dog.curFood >= 0.9 * dog.recommendedFood &&
    dog.curFood <= 1.1 * dog.recommendedFood
  );
};
const dogOkayFood = dogs.some(checkEatingOkay);
console.log(dogOkayFood);

// 7.
const dogsOkayFood = dogs.filter(checkEatingOkay);
console.log(dogsOkayFood);

// 8.
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsCopy);
