function order(words){  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}  

function order(words){
   var array = words.split(' ');
   var sortedArray = [];
   for(i = 0; i <= array.length; i++) { // get the words
      for(j = 0; j < array.length; j++) { // for every word
         if(array[j].indexOf(i) >= 0) { // check if word includes i (1,2,3...)
            sortedArray.push(array[j]); // push the word that does
         }
      }
   }
   return sortedArray.join(' ');
 }


// What i wanted to do but didnt  
 function order(words){
   return words && words.split(' ')
     .map(word => word.match(/\d/) + word) // find number in word, put it at the begining and push word on it      
     .sort() // then sort it
     .map(word => word.slice(1)) // then slice the number
     .join(' ');
 }

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
console.log(order(""));
