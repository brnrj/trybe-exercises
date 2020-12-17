const assert = require('assert');

const greetPeople = (people) => {
  let tamanho = people.length;
  let array = [];
  for (i = 0; i < tamanho; i += 1) {
    array.push('Hello ');
    array[i] += people[i];
  }
  return array;
};
//console.log(greetPeople(['Irina', 'Ashleigh', 'Elsa']));

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
//console.log(greetPeople(parameter));
assert.deepStrictEqual(greetPeople(parameter), result);
