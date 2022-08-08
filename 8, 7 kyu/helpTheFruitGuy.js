removeRotten = (bagOfFruits) =>  Array.isArray(bagOfFruits) && bagOfFruits.length ? bagOfFruits.map(fruit => fruit.replace(/rotten/g, '').toLowerCase()) : []


console.log(removeRotten(["apple","banana","kiwi","melone","orange"]))
console.log(removeRotten(["apple","rottenBanana","kiwi","rottenMelone","orange"]))
console.log(removeRotten([]))
console.log(removeRotten(null))