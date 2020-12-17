const assert = require('assert');
function secondThirdSmallest(array) {
  if (typeof array !== 'object') {
    throw 'Error: Utilize um objeto.';
  }
  let results = [];
  array.sort(function (x, y) {
    return x - y;
  });
  results = [array[1], array[2]];
  return results;
}
const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];
//console.log(secondThirdSmallest(parameter));
assert.deepStrictEqual(secondThirdSmallest(parameter), result);
assert.strictEqual(typeof secondThirdSmallest, 'function');
assert.throws(() => {
  sum(parameter, 'result');
});
