const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, key, value) => {
  obj[key] = value;
  return obj;
};
//console.log(addTurno(lesson2, 'turno', 'manhã'));

const listarKeys = (object) => Object.keys(object);
//console.log(listarKeys(lesson3));

const tamanhoObj = (object) => Object.keys(object).length;
//console.log(tamanhoObj(lesson2));

const listarValores = (object) => Object.values(object);
//console.log(listarValores(lesson3));

const newObject = Object.assign({}, { lesson1, lesson2, lesson3 });
//console.log(newObject);
const totalEstudantes = (object) =>
  `O total de estudantes é de ${
    object.lesson1.numeroEstudantes +
    object.lesson2.numeroEstudantes +
    object.lesson3.numeroEstudantes
  }`;
//console.log(totalEstudantes(newObject));
