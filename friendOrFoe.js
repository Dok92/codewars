// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours
// Note: keep the original order of the names in the output.

function friend(friends) {
  // filter strings with only 4 char
  let fr = friends.filter((friend) => friend.length == 4)
  // console.log(fr);
  // splice those strings from arr
}

friend = (friends) => friends.filter((friend) => friend.length == 4)

// console.log(friend(["Ryan", "Kieran", "Mark"])) // ["Ryan", "Mark"])
// console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])) // ["Ryan", "Mark"])
console.log(
  friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
) // ["Ryan", "Mark"])
