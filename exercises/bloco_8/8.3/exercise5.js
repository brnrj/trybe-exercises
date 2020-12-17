//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const assert = require('assert');

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA() {
  return names.reduce(
    (acc, first) =>
      acc + first.split('').reduce((sum, sec) => (sec === 'a' || sec === 'A' ? sum + 1 : sum), 0),
    0,
  );
}

// function containsA() {
//   return names.reduce((acc, first) => {
//     return (
//       acc +
//       first.split('').reduce((sum, second) => {
//         if (second === 'a' || second === 'A') {
//           return sum + 1;
//         }
//         return sum;
//       }, 0)
//     );
//   }, 0);
// }
console.log(containsA(names));
// assert.deepStrictEqual(containsA(), 20);
