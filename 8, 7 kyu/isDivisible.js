//  Is n divisible by x and y? 
//  Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.


// 1
function isDivisible(n, x, y) {
  return Number.isInteger((n/x + n/y))
}

// 2
isDivisible = (n, x, y) => n % x + n % y === 0




console.log(isDivisible(3,3,4)); // false
console.log(isDivisible(12,3,4)); // true
console.log(isDivisible(8,3,4)); // false
console.log(isDivisible(48,3,4)); // true
