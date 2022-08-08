// Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.
// The method should return an array of sentences declaring the state or country and its capital

let capital = (capitals) =>
  capitals.map(
    (e) => 'The capital of ' + (e.state || e.country) + ' is ' + e.capital
  )

// TODO do it with new Map ??????????????
// array with objects containing two key-value pairs, first state/coutry, second capital
// let sequence = new Map(capitals)
// console.log([...sequence]);
// console.log(sequence);

// for (let i = 0; i < capitals.length; i++) {
//   const objects = capitals[i]
//   console.log(objects)
//   let obj = sequence.set('a', capitals[i])
//   console.log(obj)
//   let objValues = Object.values(objects)
//   console.log(objValues)
//   let obj = sequence.get("a")
//   sequence.set(capitals[i], `The capital of ${objValues[0]} is ${objValues[1]}`)
// }
// console.log(sequence);
// console.log(obj);
// console.log(`The capital of ${objValues[0]} is ${objValues[1]}`);

// let result = `The capital of ${objValues[0]} is ${objValues[1]}`;
// console.log(objKeys);
// console.log(objValues);
// console.log(sequence.get("a")[0]);
//   return result

mixed_capitals = [
  { state: 'Maine', capital: 'Augusta' },
  { country: 'Spain', capital: 'Madrid' },
]
// state_capitals = [{state: 'Maine', capital: 'Augusta'}]
console.log(capital(mixed_capitals)[0]) // "The capital of Maine is Augusta"
