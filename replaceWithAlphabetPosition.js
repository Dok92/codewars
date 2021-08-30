//* 1
function alphabetPosition(text) {
  let result = "";

  for (let i = 0; i < text.length; i++) {
    const character = text[i].toLowerCase()
    if (character.charCodeAt() >= 97 && character.charCodeAt() <= 122) {
      result += " " + (character.charCodeAt() - 96);
    }
  }

  return result.trimStart();
}



//* 2
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');



console.log(alphabetPosition("The sunset sets at twelve o' clock."));
// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight."));
// "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
