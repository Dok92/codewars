function amaroPlan(p) {
  var arr = []
  arr.push(p * 20 - Math.floor((p - 1) / 2))
  for (var i = 1; i < p; ++i)
    if (i % 2 == 1) arr.push(0)
    else arr.push(1)
  return arr
}

function amaroPlan(n) {
  return [
    20 * n - (((n - 1) / 2) | 0),
    ...[...Array(n - 1)].map((_, i) => i % 2),
  ]
}

function amaroPlan(pirateNum) {
  const result = Array(pirateNum).fill(0)
  result[0] = pirateNum * 20
  for (let i = 2; i < pirateNum; i += 2) {
    result[0]--
    result[i]++
  }
  return result
}

const amaroPlan = (n) =>
  Array.from({ length: n }, (_, i) =>
    i ? (i & 1) ^ 1 : n * 20 - ((n - 1) >> 1)
  )

// console.log(amaroPlan(2)) // [40, 0]
// console.log(amaroPlan(3)) // [59, 0, 1]
// console.log(amaroPlan(4)) // [79, 0, 1, 0]
console.log(amaroPlan(5)) // [98, 0, 1, 0, 1]
