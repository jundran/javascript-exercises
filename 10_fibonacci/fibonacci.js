const fibonacci = function(memberInSequence) {
  if(memberInSequence < 1) return "OOPS"
  const index = memberInSequence - 1 // Adjust for zero indexed array

  const sequence = [1, 1]
  for (let i = 2; i <= index; i++) {
    sequence.push(sequence[i-2] + sequence[i-1])
  }
  return sequence[index]
}

// Do not edit below this line
module.exports = fibonacci
