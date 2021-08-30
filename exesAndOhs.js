// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//* 1
function XO(str) {
  let regX = str.match(/x/gi)
  let regO = str.match(/o/gi)

  if (regX && regO) {
    return regX.length == regO.length
  } else if (!regX && !regO) {
    return true
  }
  return false
}

//* return (x && x.length) === (o && o.length);

//* 2
function XO(str) {
  var a = str.replace(/x/gi, ''),
    b = str.replace(/o/gi, '')
  return a.length === b.length
}

console.log(XO('ooxx')) // true
console.log(XO('xooxx')) // false
console.log(XO('ooxXm')) // true
console.log(XO('zpzpzpp')) // true
console.log(XO('zzoo')) // false
