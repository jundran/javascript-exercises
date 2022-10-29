const findTheOldest = function(people) {
  // Sort oldest to youngest and return oldest
  return people.sort((a, b) => getAge(b) - getAge(a))[0]
}

const getAge = person =>
  (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth

// Do not edit below this line
module.exports = findTheOldest
