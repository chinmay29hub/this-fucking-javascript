/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const add = (a, b) => {
  return a+b
}

const sub = (a, b) => {
  return a-b
}

const divide = (a, b) => {
  if (b === 0) {
    return "Not Defined"
  } else {
    return a/b
  }
}

const multi = (a, b) => {
  return a*b
}


/* 
  TODO: create a function that console logs the result of any of the above operations.
*/

const result = () => {
  console.log(divide(12, 12))
}

result()