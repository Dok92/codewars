function toCamelCase(str) {
  return str.split(/[-, _]/g).reduce((camelCase, word, index) => {
    return index === 0 ? word : (camelCase += word[0].toUpperCase() + word.slice(1));
  }, "");
}


// Uses function as a replace
function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}


function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}


function toCamelCase(str){ 
  let arr = str.split('');
  for(i = 0; i < arr.length; i++){
    let letter = arr[i];
    if(letter == '_' || letter == '-') {
      arr[i + 1] = arr[i + 1].toUpperCase();
      arr[i] = '';
    } 
  }
  return arr.join('');
}


function toCamelCase(str){ 
  const words = str.split(/-|_/g);
  let camelCase = words[0]
  for(i = 1; i < words.length; i++){
    const word = words[i]
    camelCase += word[0].toUpperCase() + word.slice(1)
  }
  return camelCase
}


console.log(toCamelCase(""), "");
console.log(toCamelCase("the_stealth_warrior"), "theStealthWarrior");
console.log(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior");
console.log(toCamelCase("A-B-C"), "ABC");
