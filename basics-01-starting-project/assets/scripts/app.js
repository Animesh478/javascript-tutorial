let currentResult = 0;

//Defining a function
// Different ways of defining a function
// 1- Function expression
let add = function (num1, num2) {
  //num1, num2 are parameters
  const result = num1 + num2;
  return result;
};

// 2- Function Declaration
function subtract(num1, num2) {
  let result;
  if (num1 > num2) {
    result = num1 - num2;
  } else {
    result = num2 - num1;
  }
  return result;
}

//calling a function
let result = add(8, 5); // 8, 5 are arguments
console.log(result);

// Parameters vs Arguments
// parameters are the inputs provided during the function declaration.
//arguments are the inputs provided when the function is called

console.log(subtract(14, 9));
