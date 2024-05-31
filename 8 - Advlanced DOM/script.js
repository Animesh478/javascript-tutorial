'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => {
  btn.addEventListener('click', openModal);
});
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const header = document.querySelector('header');
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = `We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it!</button>`;

header.append(message); // inserting the element as the last child of the parent

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

// SMOOTH SCROLLING
btnScrollTo.addEventListener('click', e => {
  // const s1coords = section1.getBoundingClientRect();

  // window.scrollTo(s1coords.left, s1coords.top + window.scrollY);
  // scrollY => how much we have scrolled along the y-axis
  // s1coords.left => distance of the element from the left viewport
  // s1coords.top => distance of the element from the top of the viewport
  // for smooth scrolling(old way)
  /*window.scrollTo({
    left: s1coords.left,
    top: s1coords.top + window.scrollY,
    behavior: 'smooth',
  });*/

  // smooth scrolling(new way)
  section1.scrollIntoView({ behavior: 'smooth' });
});

// PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// EVENT DELEGATION
// 1. Add event listener to the common parent element
// 2. Determine which child element orginated the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});
// STYLES
/*********************** */
message.style.backgroundColor = '#37383d';
message.style.width = '120%'; // using the style property we can set only the inline styles

//  to get the computed styles in the css file
console.log(getComputedStyle(message).height); // => returns a string
console.log(Number.parseFloat(getComputedStyle(message).height, 10));
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// to style css variables
/*document.documentElement.style.setProperty('--color-primary', 'orangered');*/

// ATTRIBUTES
/*************************************** */

/*// FOR DEFAULT ATTRIBUTES OF AN ELEMENT
const logo = document.querySelector('.nav__logo');

// reading the attribute value
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className); // => to get the class attribute

// setting the attribute value
logo.alt = 'Beautiful minimalist logo';

// FOR CUSTOM ATTRIBUTES
console.log(logo.getAttribute('designer'));

// creating a new attribute or changing the attribute value
logo.setAttribute('company', 'Bankist');

// DATE ATTRIBUTES
console.log(logo.dataset.versionNumber);
console.dir(logo);
*/

// EVENT PROPAGATION (CAPTURING PHASE, TARGET PHASE AND BUBBLING PHASE)
/*********************************************************************** */
/*
const logo = document.querySelector('.nav__logo');
const navBar = document.querySelector('.nav');

navBar.addEventListener('click', e => {
  console.log('clicked on nav');
  console.log(e.target, e.currentTarget);
  navBar.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
    0,
    255
  )},${randomInt(0, 255)})`;
});

logo.addEventListener('click', function (e) {
  console.log('clicked on logo');
  console.log(e.target, e.currentTarget);
  logo.style.backgroundColor = `rgb(${randomInt(0, 255)},${randomInt(
    0,
    255
  )},${randomInt(0, 255)})`;
});

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomInt(5, 10));
// setInterval(() => {
//   randomInt(5, 10);
// }, 1000);
*/

// DOM TRAVERSING
/******************* */

const h1 = document.querySelector('h1');
console.log(h1);
console.log(h1.childNodes);
console.log(h1.children);
console.log(h1.firstElementChild);
console.log(h1.firstChild);
