// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['Maçã', 'Banana', 'Laranja'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['Uva', 'Manga', 'Abacaxi'];

// const fruitSalad = (fruit, additional) => {
//   return [...fruit, ...additional];
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// console.log('-----------------------------------------------');

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], {})); // Você passou 4 parâmetros para a função.

// console.log('-----------------------------------------------');

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const { name, seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas

// console.log('-----------------------------------------------');
// const student = {
//   a: 'Maria',
//   b: 'Turma B',
//   c: 'Matematica',
// };

// const { a: name, b: classAssigned, c: subject } = student;
// console.log(name); // Maria
// console.log(classAssigned); // Turma B
// console.log(subject); // Matemática

// const product = {
//   name: 'Smart TV Crystal UHD',
//   price: '1899.05',
//   seller: 'Casas de Minas',
// };

// const printProductDetails = ({ name, price, seller }) => {
//   console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };

// printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas
// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality } = person;
// console.log(nationality);

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const { nation = 'Brazilian' } = person;

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nation: 'Russian',
};
const nationality = ({ firstName, nation }) => `${firstName} is ${nation}`;

console.log(nationality(otherPerson)); // Ivan is Russian
console.log(nationality(person));

// const getPosition = (latitude, longitude) => {
//   return {
//     latitude,
//     longitude,
//   };
// };

// console.log(getPosition(-19.8157, -43.9542));
