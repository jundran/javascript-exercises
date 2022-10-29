const sumAll = function(x, y) {
  // Return error if any argument is negative or not a number
  if(
    [...arguments]
      .filter(arg => arg < 0 || typeof arg !== "number")
      .length
  ) return "ERROR"
  
  // Sort arguments to assign min and max
  let [min, max] = [...arguments].sort((x, y) => x - y)

  // Sum consecutive numbers between min and max (inclusive)
  let sum = 0
  for (let i = min; i <= max; i++) {
    sum += i
  }
  return sum
}

// Do not edit below this line
module.exports = sumAll
