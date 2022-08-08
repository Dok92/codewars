var flatten = function (arr) {
  let flattened = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flattened.push(arr[i][j]);
      }
    } else flattened.push(arr[i]);
  }
  return flattened;
};

//* Solution 2 - forEach, spread

var flatten = function (arr) {
  flattened = [];
  arr.forEach((currentValue) => {
    if (Array.isArray(currentValue)) {
      flattened = [...flattened, ...currentValue];
    } else flattened.push(currentValue);
  });
  return flattened;
};

//* Solution 3
var flatten = function (lol){
  return [].concat.apply([],lol);
}

//* Solution 4
const flatten = (array) => [].concat(...array);


console.log(flatten([])); //, []);
console.log(flatten([1, 2, 3])); //, [1, 2, 3]);
console.log(flatten([[1, 2, 3],["a", "b", "c"],[1, 2, 3],])); //, [1, 2, 3, "a", "b", "c", 1, 2, 3]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])); //, [3, 4, 5, [9, 9, 9], "a,b,c"]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])); //, [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
