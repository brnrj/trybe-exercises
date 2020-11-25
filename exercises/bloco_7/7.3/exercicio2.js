const assert = require('assert');

const myRemove = (arr, item) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
//console.log(myRemove([1, 2, 3, 4], 3));
assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]);
assert.deepEqual(myRemove([1, 2, 3, 4], 0), [1, 2, 3, 4]);
assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]);
