//Dada uma matriz de matrizes, transforme em uma única matriz.
const assert = require('assert');

const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten() {
  const xablau = arrays.reduce((acc, element) => acc.concat(element), []);
  return xablau;
}
console.log(flatten(arrays));

// assert.deepEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
