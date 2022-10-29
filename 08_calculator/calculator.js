const add = function(x, y) {
	return x + y
}

const subtract = function(x, y) {
	return x - y
}

const sum = function(numArray) {
  return numArray.reduce((prev, current) => prev + current, 0)
}

const multiply = function(numArray) {
  return numArray.reduce((prev, current) => prev * current)
}

const power = function(x, y) {
	return x ** y
}

const factorial = function(x) {
  let result = 1
  for (let i = x; i > 0; i--) {
    result *= i
  }
  return result
}

/*
  Rounds start from the most nested and last factorial function to be called.
  Results are outputted FILO.
*/
let round = 1
const factorialRecursive = function(n) {
  let result
  
  if    (n === 0) result = 1
  else  result = n * factorialRecursive (n - 1)

  // console.log(`Returning ${result} from round ${round}`)
  round++
  return result  
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
  factorialRecursive
}
