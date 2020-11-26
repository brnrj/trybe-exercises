const assert = require('assert');
const wordLengths = (array) => {
  let saida = [];
  for (i in array) {
    saida.push(array[i].length);
  }
  return saida;
};
//console.log(wordLengths(['sun', 'potato', 'roundabout', 'pizza']));
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
