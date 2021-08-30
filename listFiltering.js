// function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//* 1
function filter_list(l) {
  return l.filter(Number.isInteger)
}

//*2
function filter_list(l) {
  return l.filter((v) => typeof v == 'number')
}

console.log(filter_list([1, 2, 'a', 'b'])) //  == [1,2]
console.log(filter_list([1, 'a', 'b', 0, 15])) // == [1,0,15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])) // == [1,2,123]
