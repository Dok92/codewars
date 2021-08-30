// The Western Suburbs Croquet Club has two categories of membership, Senior and Open
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// integer for the person's age and an integer for the person's handicap.
//* 1
function openOrSenior(data) {
  let categories = []

  for (let i = 0; i < data.length; i++) {
    const list = data[i]
    const age = list[0]
    const handicap = list[1]

    if (age >= 55 && handicap > 7) {
      categories.push('Senior')
    } else categories.push('Open')
  }
  return categories
}

//*2
function openOrSenior(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? 'Senior' : 'Open'
  )
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
)
// ["Open", "Open", "Senior", "Open", "Open", "Senior"]
