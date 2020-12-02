const numbers = [50, 85, -30, 3, 15];

//soma de um array
const getSum = numbers.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(getSum);

//maior número em um array
const maiorNum = numbers.reduce((bigger, number) => (bigger > number ? bigger : number), 100);
console.log(maiorNum);

//menor número em um array
const menorNum = numbers.reduce((small, number) => (small < number ? small : number), 100);
console.log(menorNum);

//soma valores pares em um array
const pares = (element) => element % 2 === 0;
const sumPair = (value, number) => value + number;
const sumAllPairs = numbers.filter(pares).reduce(sumPair);
console.log(sumAllPairs);

//soma valores pares em um array utilizando apenas reduce
const sumPairs = (array) =>
  array.reduce((acumulador, number) => (number % 2 === 0 ? acumulador + number : acumulador));
console.log(sumPairs(numbers));

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

const xablau = (acc, materia) => (acc.nota > materia.nota ? acc : materia);

const notas = estudantes.map((studants) => ({
  name: studants.nome,
  materia: studants.materias.reduce((acc, materia) => (acc.nota > materia.nota ? acc : materia))
    .name,
}));
console.log(notas);
