/*const btn = document.querySelector("#btn");

const moveBtn = function (element, amount, delay, callback) {
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const left = element.getBoundingClientRect().left;

  if (elRight + amount > bodyBoundary) {
    console.log("cannot move further");
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${left + amount}px)`;
      if (callback) callback();
    }, delay);
  }
};
*/
// Callback hell
/*moveBtn(btn, 100, 1000, () => {
  moveBtn(btn, 100, 1000, () => {
    moveBtn(btn, 100, 1000, () => {
      moveBtn(btn, 100, 1000, () => {
        moveBtn(btn, 100, 1000);
      });
    });
  });
});
*/
// PROMISE
/************** */

/*// 1) Creating a promise
/****************************** */
/*const promise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random > 0.5) resolve();
  else reject();
});
*/
// resolve and reject are 2 functions. when we want to resolve a promise we call resolve and when we want to reject a promise we call reject

// 2) Interacting or consuming a promise
/***************************************** */
/*promise
  .then(() => console.log("Promise is resolved"))
  .catch(() => console.log("Promise is rejected"));
// console.log(promise);
*/

// Creating a function that returns a promise
/********************************************** */
/*const promiseFunc = () => {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random > 0.5) resolve();
    else reject();
  });
};

promiseFunc()
  .then(() => console.log("Promise is resolved"))
  .catch(() => console.log("Promise is rejected"));
// console.log(promise);
*/
/*const fakeRequest = function (url) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   const rand = Math.random();
    //   if (rand < 0.3) {
    //     reject({ status: 404 });
    //   } else {
    //     resolve();
    //   }
    // }, 1000);
    const pages = {
      "/users": [
        { id: 1, username: "Animesh" },
        { id: 2, username: "Betu" },
      ],
      "/about": "This is the about page",
    };

    const data = pages[url];
    if (data) {
      resolve({ status: 200, data });
    } else {
      reject({ status: 404 });
    }
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log(res.data);
    console.log(res.status);
    console.log("Request resolved");
  })
  .catch((err) => {
    console.log(err.status);
    console.log("Request rejected");
  });
fakeRequest()
  .then((res) => {
    console.log(res);
    console.log("Request resolved");
  })
  .catch((err) => {
    console.log(err.status);
    console.log("Request rejected");
  });
*/

/*const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); //resolve with a value!
      } else {
        reject({ status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};

fakeRequest("/users")
  .then((res) => {
    console.log(res.data);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
  })
  .then((res) => {
    console.log(res.data);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err.status);
  });

// we can chain then methods as long as we return a promise from the callback of each then method

const fakePromise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});
// then method always return a promise
const value = fakePromise.then((data) => {
  console.log(data);
  return 3;
});
console.log(value);

const btn = document.querySelector("#btn");

const moveBtn = function (element, amount, delay) {
  return new Promise((resolve, reject) => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const left = element.getBoundingClientRect().left;

    if (elRight + amount > bodyBoundary) {
      reject("Not enough space");
    } else {
      setTimeout(() => {
        element.style.transform = `translateX(${left + amount}px)`;
        resolve();
      }, delay);
    }
  });
};

moveBtn(btn, 300, 1000)
  .then(() => moveBtn(btn, 300, 1000))
  .then(() => moveBtn(btn, 300, 1000))
  .then(() => moveBtn(btn, 300, 1000))
  .then(() => moveBtn(btn, 300, 1000))
  .catch((err) => console.log(err));
*/

// Different ways for sending a request to a server
/********************************************************* */
// 1) XMLHttpRequest
/************************* */

/*const req = new XMLHttpRequest(); // creating an request object

// ON SUCCESS CALLBACK
req.addEventListener("load", function () {
  console.log("IT WORKED !!!!");
  const data = JSON.parse(this.responseText); // converting JSON to js object
  // for (let planet of data.results) {
  //   console.log(planet.name);
  // }
  // console.log(data.results[0].films[0]);
  const filmURL = data.results[0].films[0];

  const reqFilm = new XMLHttpRequest();
  reqFilm.addEventListener("load", function () {
    console.log(reqFilm);
    const dataFilm = JSON.parse(this.responseText);
    console.log(dataFilm);
  });
  reqFilm.addEventListener("error", function () {
    console.log("Wrong URL !!!");
  });
  reqFilm.open("GET", filmURL);
  reqFilm.send();
});

// ON ERROR CALLBACK
req.addEventListener("error", () => {
  console.log("ERROR !!!!");
});

// MAKING THE REQUEST
req.open("GET", "https://swapi.dev/api/planets/");
req.send();

console.log("Request sent");
*/

// 2) FETCH API
/****************** */
/*fetch("https://swapi.dev/api/planets/")
  .then((response) => {
    console.log(response);
    if (!response.ok) {
      throw new Error("Status code: 404, Page not found");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.title);
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*const checkStatusAndParse = function (response) {
  if (!response.ok) {
    throw new Error(`Status Code: ${response.status}`);
  }
  return response.json();
};

const printPlanets = function (data) {
  console.log("10 more planets");

  for (let planet of data.results) {
    console.log(planet.name);
  }
  // const nextURL = data.next;
  // return fetch(nextURL);

  return Promise.resolve(data.next);
};

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
  return fetch(url);
};

fetchNextPlanets()
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchNextPlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log(err);
    console.log("Page not found");
  });
*/

// 3) Using AXIOS
/******************* */
// Axios does the parsing of JSON into JS obj for us. It returns a promise and the resolved value of the promise is the actual data and not json as in the case if we use fetch()
// Also with axios we donot have to manually weed out the bad status code such as 404 error

/*axios
  .get("https://swapi.dev/api/planets/")
  .then(({ data }) => {
    console.log(data);
    for (let planet of data.results) {
      console.log(planet.name);
    }
    return axios.get(data.next);
  })
  .then(({ data }) => {
    console.log("Next 10 planets .....");
    for (let planet of data.results) {
      console.log(planet.name);
    }
  });
*/

// ASYN/AWAIT
/**************** */

/*async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    // throw new Error("X and Y need to be numbers");
    throw "X and Y need to be numbers";
  }

  return x + y;
}

add("e", 5)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
*/

// Same thing with promise
/*const addPromise = function (x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("X and Y are not numbers");
    }
    resolve(x + y);
  });
};

addPromise("e", 5)
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
*/

// const starWars = async function () {
//   const res = await axios.get("https://swapi.dev/api/planetsssss/");
//   console.log(res.data);
// };

// one way to catch error in async/await
/***************************************** */
// starWars().catch((err) => {
//   console.log(err.message);
// });

// second way to catch error
/****************************** */
/*const starWars = async function () {
  try {
    const res = await axios.get("https://swapi.dev/api/planets/");
    console.log(res.data);
  } catch (e) {
    console.log(e.message);
  }
};
starWars();

console.log("hello there"); //=> will be executed first
*/

// Multiple awaits
/************************ */
/*const btn = document.querySelector("#btn");

const moveBtn = function (element, amount, delay) {
  return new Promise((resolve, reject) => {
    const bodyBoundary = document.body.clientWidth;
    const elRight = element.getBoundingClientRect().right;
    const left = element.getBoundingClientRect().left;

    if (elRight + amount > bodyBoundary) {
      reject("Not enough space");
    } else {
      setTimeout(() => {
        element.style.transform = `translateX(${left + amount}px)`;
        resolve();
      }, delay);
    }
  });
};

async function animateRight(el, amt) {
  await moveBtn(el, amt, 1000);
  await moveBtn(el, amt, 1000);
  await moveBtn(el, amt, 1000);
  await moveBtn(el, amt, 1000);
  await moveBtn(el, amt, 1000);
  await moveBtn(el, amt, 1000);
}

animateRight(btn, 300).catch((err) => {
  console.log(err);
  animateRight(btn, -100);
});
// moveBtn(btn, 300, 1000)
//   .then(() => moveBtn(btn, 300, 1000))
//   .then(() => moveBtn(btn, 300, 1000))
//   .then(() => moveBtn(btn, 300, 1000))
//   .then(() => moveBtn(btn, 300, 1000))
//   .catch((err) => console.log(err));
*/

// Making requests sequentially (one after another)

// async function getPokemons() {
//   const pokemon1 = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
//   const pokemon2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const pokemon3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(pokemon1.data);
//   console.log(pokemon2.data);
//   console.log(pokemon3.data);
// }

// getPokemons();

// Making requests parallely

// async function getPokemons() {
//   const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
//   const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

//   const pokemon1 = await prom1;
//   const pokemon2 = await prom2;
//   const pokemon3 = await prom3;

//   console.log(pokemon1.data);
//   console.log(pokemon2.data);
//   console.log(pokemon3.data);
// }

// getPokemons();

// ASYN/AWAIT WITH FETCH
/************************* */
async function pokemon() {
  return await fetch("https://pokeapi.co/api/v2/pokemon/3");
}

pokemon()
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));

// promise.all()
/****************** */
async function getPokemons() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

  const results = await Promise.all([prom1, prom2, prom3]);

  console.log(results);

  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

getPokemons();
