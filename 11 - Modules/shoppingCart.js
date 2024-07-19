console.log('From shopping cart module');
const shippingCost = 10;
const totalPrice = 300;

const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product: product, quantity: quantity });
  console.log(cart);
};

export { shippingCost, totalPrice as price }; // changing the name of the export
