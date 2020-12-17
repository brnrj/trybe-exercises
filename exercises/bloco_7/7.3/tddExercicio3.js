const assert = require('assert');
const addAllnumbers = (array) => {
  let total = 0;
  for (i in array) {
    total += array[i];
  }
  return total;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
