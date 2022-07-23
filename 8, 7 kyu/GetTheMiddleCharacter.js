// If the word's length is even, return the middle 2 characters.

// function getMiddle(s) {
//   return s.substring(Math.ceil(s.length/2)-1, s.length/2+1)
// }

function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"),);
console.log(getMiddle("A"));