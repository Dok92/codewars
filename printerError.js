// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced
// e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

function printerError(s) {
  badString = s.match(/[n-z]/g) || []
  return badString.length + '/' + s.length
}

//*2
const printerError = (s) => `${s.replace(/[a-m]/gi, '').length}/${s.length}`

//*3
function printerError(s) {
  // your code
  var count = 0
  for (var i = 0; i < s.length; i++) {
    if (s[i] > 'm') {
      count++
    }
  }
  return count + '/' + s.length
}

console.log(
  printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmm')
) // 3/56
