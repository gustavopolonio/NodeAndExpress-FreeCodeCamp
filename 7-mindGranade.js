// If we have a function inside of the module that we invoke, this function will
// run even though we don't assign it to a variable (we just call the require)

const num1 = 10
const num2 = 5

function sum() {
  console.log(`The sum is: ${num1 + num2}`)
}

sum()