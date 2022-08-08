//* 1
String.prototype.toJadenCase = function () {
  let jadenStr = ''
  let capitalize = true
  for (let i = 0; i < this.length; i++) {
    const character = this[i]
    if (character === ' ') {
      capitalize = true
      jadenStr += ' '
    } else {
      if (capitalize) {
        jadenStr += character.toUpperCase()
        capitalize = false
      } else {
        jadenStr += character.toLowerCase()
      }
    }
  }
  return jadenStr
}

//* 2
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

//* 3
String.prototype.toJadenCase = function () {
  var words = this.split(' ')

  for (var i = 0, wordsLen = words.length; i < wordsLen; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  }

  return words.join(' ')
}

var str = "How can mirrors be real if our eyes aren't real"
console.log(str.toJadenCase()) // "How Can Mirrors Be Real If Our Eyes Aren't Real");
