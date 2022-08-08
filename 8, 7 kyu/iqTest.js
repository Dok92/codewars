// Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

const { count } = require("console");

function iqTest(str) {
  let numArr = [];
  let numbers = str.split(" ");
  for (let i = 0; i < numbers.length; i++) {
    let num = Number(numbers[i]);
    numArr.push(num);
  }
  if ((numArr[0] + numArr[1]) % 2 == 0) {
    if (numArr[0] % 2 == 0) {
      return numArr.findIndex((x) => x % 2 !== 0) + 1;
    } else {
      return numArr.findIndex((x) => x % 2 == 0) + 1;
    }
  } else {
    if (numArr[3] % 2 == 0) {
      return numArr.findIndex((x) => x % 2 !== 0) + 1;
    } else {
      return numArr.findIndex((x) => x % 2 == 0) + 1;
    }
  }
}

function iqTest(str) {
    let odd = {
        count: 0,
        lastIndex: 0
    }
    let even = {
        count: 0,
        lastIndex: 0
    }
    let num = str.split(' ')
    for (let i = 0; i < num.length; i++) {
        const currentNum = num[i];
        if (currentNum % 2 == 0) {
            even.count ++
            even.lastIndex = i + 1
        } else {
            odd.count ++
            odd.lastIndex = i + 1
        }       
    }
    if (even.count > 1) {
        return odd.lastIndex
    } else return even.lastIndex
}

//* 2 
function iqTest(numbers){
    numbers=numbers.split(" ").map(function(x){return parseInt(x)%2;});
    if (numbers[0]+numbers[1]+numbers[2]==3 || numbers[0]+numbers[1]+numbers[2]==2) return numbers.indexOf(0)+1;
    else return numbers.indexOf(1)+1;
  }

console.log(iqTest("2 4 7 8 12")); //  3 Third number is odd, while the rest of the numbers are even
console.log(iqTest("1 2 1 1")); //  2 Second number is even, while the rest of the numbers are odd
console.log(iqTest("3 3 2 3")); //  2 Second number is even, while the rest of the numbers are odd
console.log(iqTest("2 2 2 2 1")); //  2 Second number is even, while the rest of the numbers are odd
console.log(iqTest("1 1 1 2 11")); //  2 Second number is even, while the rest of the numbers are odd
