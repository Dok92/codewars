function list(names){      
    let sentence = ''

    for (let i = 0; i < names.length; i++) {
        let name = Object.values(names[i])
        if (names.length  == 1) {
            return sentence += name
        }
        if (i !== names.length - 2 && i !== names.length - 1) {                
            sentence += name + ', '            
        } else if (i !== names.length - 1) {
            sentence += name + ' & ' 
        } else {
            sentence += name
        } 
    }

    return sentence
}

function list(names){    
    let sentence = ''
        
     for (let i = 0; i < names.length; i++) {
        const { name } = names[i]
        if (names.length  == 1) {
            return sentence += name
        }
        if (i !== names.length - 2 && i !== names.length - 1) {                
            sentence += name + ', '          
        } else if (i !== names.length - 1) {
            sentence += name + ' & ' 
        } else {
            sentence += name
        } 
    }

    return sentence
}

//* While loop
function list(names) {
    var result = "";
    var comma = ", ";
    var and = " & ";
    while (names.length) {
        result += names.shift().name;
        if (names.length == 1) {
            result += and;
        } else if (names.length > 1) {
            result += comma;
        }
    }

    return result;
}

//* Reduce
function list(names){
    return names.reduce(function(prev, current, index, array){
      if (index === 0){
        return current.name;
      }
      else if (index === array.length - 1){
        return prev + ' & ' + current.name;
      } 
      else {
        return prev + ', ' + current.name;
      }
    }, '');
   }

//* Map, join, regex
var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")


console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
console.log(list([{name: 'Bart'}]));
