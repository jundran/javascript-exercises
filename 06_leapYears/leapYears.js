/*
  Leap years are years divisible by four. 
  However, years divisible by 100 are not leap years. 
  Unless they are divisible by 400.
*/
const leapYears = function(year) {
  return year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)
}

// Do not edit below this line
module.exports = leapYears

