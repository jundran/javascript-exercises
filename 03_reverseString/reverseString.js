const reverseString = function(string = "") {
  let output = ""  
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i]
  }
  return output

  // return string.split("").reverse.join("")
};

// Do not edit below this line
module.exports = reverseString;
