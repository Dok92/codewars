// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers.
// No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
  let sortedNumbers = numbers.sort((a, b) => a - b)
  return sortedNumbers[0] + sortedNumbers[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])) //13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) //6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) //10
