const caesar = function(plainText, shift) {
  const ASCII_UPPER_CASE_A = 'A'.charCodeAt(0) // 65
  const ASCII_UPPER_CASE_Z = 'Z'.charCodeAt(0) // 90
  const ASCII_LOWER_CASE_A = 'a'.charCodeAt(0) // 97
  const ASCII_LOWER_CASE_Z = 'z'.charCodeAt(0) // 122
 
  function getCipherLetter(letter) {
    let asciiCode = letter.charCodeAt(0) + (shift % 26)
    const isLowerCase = letter => letter.charCodeAt(0) >= ASCII_LOWER_CASE_A

    const a = isLowerCase(letter) ? ASCII_LOWER_CASE_A : ASCII_UPPER_CASE_A
    const z = isLowerCase(letter) ? ASCII_LOWER_CASE_Z : ASCII_UPPER_CASE_Z
    
    if (shift >= 0 && asciiCode > z) { // overflow
      const overflow = asciiCode - z
      asciiCode = a + overflow - 1
    }
    else if (shift <= 0 && asciiCode < a) { // underflow
      const underflow = a - asciiCode
      asciiCode = z - underflow + 1
    }
    return String.fromCharCode(asciiCode)
  }

  return plainText.split('').map(letter => {
        // If not a letter then just return as is
        if (/[^a-z]/ig.test(letter)) return letter
        else return getCipherLetter(letter)
  }).join('')
}

// Do not edit below this line
module.exports = caesar
