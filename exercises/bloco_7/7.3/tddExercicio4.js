const assert = require('assert');
const findTheNeedle = (array, string) => {
  let position = 0;
  for (i in array) {
    if (string === array[i]) {
      position = Number(i);
      return position;
    }
  }
  return -1;
};
// console.log(typeof findTheNeedle(['house', 'train', 'slide', 'needle', 'book'], 'needle'));

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
