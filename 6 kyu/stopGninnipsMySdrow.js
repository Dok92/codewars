// return the same string, but with all five or more letter words reversed

function spinWords(string) {
  const arr = string.split(" ");
  let reversed = "";
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (word.length < 5) {
      reversed += " " + word
    } else {
      reversed += " " + word.split("").reverse().join("");
    }
  }
  return reversed.trim();
}


function spinWords(sentence){
  return sentence.split(' ').reduce((result, word) => { // reduce is one less iteration (no join)
    if (word.length >= 5) {
      word = word.split("").reverse().join("");
    }
    result += ' ' + word
    return result
  }, '').trim()
}


function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}


function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}



console.log(spinWords("Welcome"));
console.log(spinWords("Hey you two"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("putqhnejc k"));

// "emocleW"
// "Hey wollef sroirraw"
