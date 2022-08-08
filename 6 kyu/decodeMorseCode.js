
// 1

decodeMorse = function (morseCode) {
  // 3 spaces are used to separate words
  return morseCode
    // extra spaces before or after the code have no meaning and should be ignored.
    .trim()
    // 3 spaces are used to separate words
    .split("   ")
    .map((word) => {
      // single space is used to separate the character codes
      return word.split(" ").map(char => {
        return MORSE_CODE[char]
      })
      // join characters
      .join("");
    })
    // join words
    .join(" ");

  // return morseCode.split(' ')
};

// 2
decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => MORSE_CODE[code] || ' ')
    .join('');
}

// 3
decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => code || ' ')
    .join('');
}



console.log(decodeMorse("H E Y   J U D E")); // 'HEY JUDE'

