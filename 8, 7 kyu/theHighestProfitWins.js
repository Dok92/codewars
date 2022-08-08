// Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
  arr.sort((a, b) => a - b)
  let min = arr[0]
  let max = arr[arr.length - 1]
  return [min, max]
}

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]
}

console.log(minMax([1, 2, 3, 4, 5])) //  == [1,5]
console.log(minMax([2334454, 5])) //  == [5, 2334454]
console.log(minMax([1])) //  == [1, 1]
