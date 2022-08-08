// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.
//*1
// function isIsogram(str) {
//   let counts = {}

//   for (let letter = 0; letter < str.length; letter++) {
//     const currentLetter = str[letter].toLowerCase()
//     if (!counts[currentLetter]) {
//       counts[currentLetter] = 1
//     } else {
//       return false
//     }
//   }
//   return true
// }

//*2
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length
}

console.log(isIsogram('Dermatoglyphics')) // == true
console.log(isIsogram('')) // == true
console.log(isIsogram('aba')) // == false
console.log(isIsogram('moOse')) // == false
