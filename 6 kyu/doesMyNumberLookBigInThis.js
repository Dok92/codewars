function narcissistic(value) {
  // number rise to the power of value.length
  let str = value.toString() 
  let sum = 0
   for (let i = 0; i < str.length; i++) {
    const strDigit = str[i];
    sum += Math.pow(+strDigit, str.length)    
  }
  return sum == value
}


function narcissistic(value) {
  return [...value.toString()].reduce((sum, digit, i, {length}) => { // destructured length from array
    return sum + Math.pow(digit, length)
  }, 0) == value
}


// Get the length of value
const length = Math.floor(Math.log10(Math.abs(value))) + 1



console.log(narcissistic(153));
console.log(narcissistic(371));

// For example, take 153 (3 digits), which is narcisstic:  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153