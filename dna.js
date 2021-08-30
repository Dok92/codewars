// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G"
// TODO: with for loop

function DNAStrand(dna) {
  let complements = ''
  for (let i = 0; i < dna.length; i++) {
    let curentLetter = dna[i]
    if (curentLetter == 'A') {
      complements += 'T'
    } else if (curentLetter == 'T') {
      complements += 'A'
    } else if (curentLetter == 'G') {
      complements += 'C'
    } else if (curentLetter == 'C') {
      complements += 'G'
    }
  }
  return complements
}

// TODO: with array methods

function DNAStrand(dna) {
  let compliments = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  }

  return dna
    .split('')
    .map((letter) => compliments[letter])
    .join('')
}

//  TODO: with object

function DNAStrand(dna) {
  let compliment = ''

  let compliments = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G',
  }

  for (let i = 0; i < dna.length; i++) {
    const currentLetter = dna[i]
    compliment += compliments[currentLetter]
  }
  return compliment
}

// ANCHOR very clever ones:

// 1
function DNAStrand(dna) {
  return dna
    .replace(/A/g, 't')
    .replace(/T/g, 'a')
    .replace(/C/g, 'g')
    .replace(/G/g, 'c')
    .toUpperCase()
}

// 2
const DNAStrand = (dna) => dna.replace(/./g, (m) => 'CGAT'['GCTA'.indexOf(m)])

// 3
const DNAStrand = (dna) =>
  dna.replace(/[ATCG]/g, (val) => ({ A: `T`, T: `A`, C: `G`, G: `C` }[val]))

console.log(DNAStrand('AAAA'))
console.log(DNAStrand('ATTGC'))
console.log(DNAStrand('GTAT'))
