// let isSquare = function (n) {
//   return Number.isInteger(Math.sqrt(n))
// };

isSquare = n => Number.isInteger(Math.sqrt(n))

console.log(isSquare(4)); // true, 4 is a square number (2 * 2)
console.log(isSquare(25)); // true, 25 is a square number (5 * 5)
console.log(isSquare(26)); // false
