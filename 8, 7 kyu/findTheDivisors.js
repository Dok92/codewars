// returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest
// If the number is prime return the string '(integer) is prime'

function divisors(integer) {
  // divide integer with every positive number greater than 1 and less than integer
  // if divided number is integer return it in arr
  // sort the arr
  let arr = []
  for (let i = 2; i < integer; i++) {
        if (integer % i == 0) {
            arr.push(i)
        }   
    }
    if (arr.length == 0) {
        return `${integer} is prime`
    } else return arr    
};


console.log(divisors(12)); // should return [2, 3, 4, 6]
console.log(divisors(25)); // should return [5]
console.log(divisors(13)); // should return "13 is prime"