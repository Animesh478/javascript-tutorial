// NAMED IMPORTS
/******************* */
// Multiple imports
/*import { addToCart, shippingCost as cost, price } from './shoppingCart.js'; // changing the name of the import

addToCart('apples', 10);
console.log(cost, price);
*/

import 'core-js/stable'; //=> Polyfilling
import 'regenerator-runtime/runtime.js'; // => Polyfilling async functions

// Importing everything at once
import * as ShoppingObject from './shoppingCart.js';

ShoppingObject.addToCart('apples', 52);
console.log(ShoppingObject.price, ShoppingObject.shippingCost);

/*fetch('https://jsonplaceholder.typicode.com/posts')
  .then(resObj => resObj.json())
  .then(data => console.log(data));
*/

// const res1 = fetch('https://jsonplaceholder.typicode.com/posts');
// console.log(res1);
// console.log(12);
// console.log(res1);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// res.json().then(data => console.log(data));

/*const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  const lastPost = data.slice(-1)[0];
  const { id, body } = lastPost;

  return { id, body };
};

// Using the then() method
const lastPost = getLastPost();
lastPost.then(data => console.log(data));

// Using top-level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

// Importing modules from lodash
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 2 },
    { product: 'pizza', quantity: 4 },
  ],
  user: { loggedIn: true },
};

console.log(state);

const stateClone = Object.assign({}, state);
console.log(stateClone);

// Deep Copy using lodash
const stateDeepClone = cloneDeep(state);
stateClone.user.loggedIn = false;
console.log(state);
console.log(stateDeepClone);

// Shallow Copy
const user = {
  name: 'Animesh',
};

const userClone = Object.assign({}, user);
userClone.name = 'jonas';

console.log(userClone);
console.log(user);

// Hot module replacement
if (module.hot) {
  module.hot.accept();
}

Promise.resolve('Test').then(x => console.log(x));
