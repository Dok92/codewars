//! Asked solution

// class Fighter {
//     constructor(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function () { return this.name; };
//     }
// }

console.log(
  declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'),
  'Lew'
)
