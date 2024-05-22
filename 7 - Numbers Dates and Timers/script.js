'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-05-18T17:01:17.194Z',
    '2024-05-20T23:36:17.929Z',
    '2024-05-21T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
const formatMovementDate = function (date, locale) {
  const calcDaysPassed = function (date1, date2) {
    return Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
  };

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  const numDays = calcDaysPassed(date, new Date());

  const option = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  if (numDays === 0)
    return `Today, ${new Intl.DateTimeFormat(locale, {
      hour: 'numeric',
      minute: 'numeric',
    }).format(date)}`;
  if (numDays === 1) return 'Yesterday';
  if (numDays <= 7) return `${numDays} days ago`;
  else
    return new Intl.DateTimeFormat(currentAccount.locale, option).format(date);
};
const calcFormattedMovement = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

// DISPLAY MOVEMENTS
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const displayFormattedMov = calcFormattedMovement(
      mov,
      acc.locale,
      acc.currency
    );

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${displayFormattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// CALCULATING THE TOTAL BALANCE
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = calcFormattedMovement(
    acc.balance,
    acc.locale,
    acc.currency
  );
};

// DISPLAYING THE SUMMARY
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = calcFormattedMovement(
    incomes,
    acc.locale,
    acc.currency
  );

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = calcFormattedMovement(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = calcFormattedMovement(
    interest,
    acc.locale,
    acc.currency
  );
};

// CREATING USERNAME
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// UPDATING UI
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// IMPLEMENTING THE LOGOUT TIMER
const logOutTimer = function () {
  const tick = function () {
    const minutes = String(Math.trunc(time / 60)).padStart(2, 0);
    const seconds = `${time % 60}`.padStart(2, 0);
    // display every second how much time left
    labelTimer.textContent = `${minutes}:${seconds}`;
    // when timer reaches 0, stop the timer and log the user out
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Login to get started';
      containerApp.style.opacity = 0;
    }
    // decrease the time by 1s
    time--;
  };
  // set the initial value for the timer
  let time = 30;

  tick();

  // call the setInterval function every one second
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// LOGIN FUNCTIONALITY
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // const now = new Date();
    // const day = now.getDate();
    // const month = now.getMonth() + 1;
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const minutes = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${String(day).padStart(2, 0)}/${String(
    //   month
    // ).padStart(2, 0)}/${year}, ${hour}:${minutes}`;

    const now = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    };
    const locale = navigator.language;
    console.log(locale);
    labelDate.textContent = Intl.DateTimeFormat(
      currentAccount.locale,
      option
    ).format(now);

    if (timer) clearInterval(timer);
    timer = logOutTimer(); // starting the timer

    // Update UI
    updateUI(currentAccount);
  }
});

// TRANSFER FUNCTIONALITY
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
  }
  if (timer) clearInterval(timer);
  timer = logOutTimer();
});

// LOAN FUNCTIONALITY
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(() => {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
    }, 3000);
  }
  inputLoanAmount.value = '';
  if (timer) clearInterval(timer);
  timer = logOutTimer();
});

// CLOSE ACCOUNT FUNCTIONALITY
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// converting string to number
/*console.log(+'23');
console.log('1' + '23');
console.log(1 + +'23');
console.log('1' + +'23');
*/
// parsing
/*console.log(Number.parseInt('30px'));
console.log(Number.parseInt('30'));
console.log(Number.parseFloat('30px'));

console.log(Number.parseFloat('3.2rem'));
console.log(Number.parseInt('3.2rem'));
*/
// check if a value is a number
/*console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(20 / 0));
*/

/*console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));

// creating a function that returns a random value between any two numbers
const randomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(2, 10));

// Rounding decimals
console.log((2.33353).toFixed(2));
console.log((2).toFixed(2));
console.log((2.4).toFixed(0));
console.log((2.375).toFixed(1));

// Date and time
const now = new Date(); // current date and time
console.log(now);

console.log(new Date('14 December 2024'));
*/

// OPERATIONS ON DATES
/*const future = new Date('31 May 2024');
const present = new Date();

console.log(present - future);

const numDays = function (date1, date2) {
  return Math.floor(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));
};
console.log(numDays(future, present));
*/

// SET TIMEOUT
/*const ingredients = ['olives', 'spinach'];
console.log(...ingredients);
const pizzaTimer = setTimeout(
  (ing1, ing2) => {
    console.log(`Your pizza with ${ing1} and ${ing2} is on the way`);
  },
  3000,
  ...ingredients
);
console.log(pizzaTimer);
// cancelling settimeout
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
*/

// since object is not an iterable we cannot directly spread it like we do with the arrays. we have to specify the object property names in order to extract them from the object
/*const obj = {
  name: 'animesh',
  age: 10,
};
const { name, age } = obj;
console.log(name, age);
*/

// setInterval
/*setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);*/
