// Digital root is the recursive sum of all the digits in a number.

function digitalRoot(n) {
  if (n > 9) {
    let arr = n.toString().split("");
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      const digit = arr[i];
      sum += +digit;
    }
    return digitalRoot(sum);
  }
  return n;
}


function digitalRoot(n) {
  while (n > 9) {
    let sum = 0
    while (n > 0) {
      const lastDigit = n % 10
      // divide n by 10 to drop off last digit
      n = Math.floor(n / 10)
      sum += lastDigit
    }
    // reasign sum to n
    n = sum
  }
  return n
}


function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

console.log(digitalRoot(16), 7);
console.log(digitalRoot(456), 6);
console.log(digitalRoot(493193), 2);

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
