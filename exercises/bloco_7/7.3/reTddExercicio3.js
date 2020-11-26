const assert = require('assert');
const greaterThanTen = (array) => {
  if (typeof array !== 'object') {
    throw 'Error: Insiria um Array';
  }
  let results = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 10) {
      results.push(array[i]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];
//console.log(greaterThanTen(parameter));
assert.deepStrictEqual(greaterThanTen(parameter), result);
assert.throws(() => {
  sum(parameter, 'result');
});
