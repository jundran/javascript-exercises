const removeFromArray = function(array = [], ...elementsToBeRemoved ) {
  return array.filter(e => !elementsToBeRemoved.includes(e))
}
removeFromArray([1, 2, 3, 4], 3, 2)

// Do not edit below this line
module.exports = removeFromArray;
