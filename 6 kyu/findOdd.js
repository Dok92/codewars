function findOdd(arr) {
  let numbers = {}

  arr.forEach(num => {
    numbers[num] ? numbers[num] += 1 : numbers[num] = 1
  });
  
  for (const number in numbers) {
    const count = numbers[number]
    if (count %2 !== 0) {
      return +number
    }
  }
}


function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}


const findOdd = (A) => A.sort((a, b) => a - b).reduce((a, b) => b - a);


function findOdd(A) {
  for(var i = 0; i < A.length; i++){  
    //Query the number of times that this 'i' element appears
    //then verify if that number of times is odd. If it is true, then return
    //that 'i' element
    if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
      return A[i];
    }
  }
  return 0;
}



console.log(findOdd([10]), 10);
console.log(findOdd([-5,4,3,2,1,-5,4,3,2]), 1);

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).