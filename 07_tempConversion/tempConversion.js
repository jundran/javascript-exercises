/*
°F to °C 	Deduct 32, then multiply by 5, then divide by 9
°C to °F 	Divide by 5, then multiply by 9, then add 32
*/
const ftoc = f => +((f - 32) * 5 / 9).toFixed(1)

const ctof = c => +(c / 5 * 9 + 32).toFixed(1)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
}
