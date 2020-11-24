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
const totalEstudantes = (object) => {
  let total = 0;
  const arrayObj = Object.keys(object);
  for (i in arrayObj) {
    total += object[arrayObj[i]].numeroEstudantes;
  }
  return `O total é de ${total} estudantes.`;
};
//console.log(totalEstudantes(newObject));

const getValueByPoistion = (object, pos) => Object.values(object)[pos];
//console.log(getValueByPoistion(lesson2, 2));

const verifyKeysValues = (object, key, value) => {
  let boo = true;
  const error = 'Error';
  const arrayKey = Object.keys(object);
  const arrayValue = Object.values(object);
  let pos = 0;
  for (i in arrayKey) {
    if (key === arrayKey[i]) {
      boo = true;
      pos = i;
    } else {
      boo = false;
    }
  }
  for (j in arrayValue) {
    if (value === arrayValue[pos]) {
      boo = true;
    } else {
      boo = false;
    }
  }
  return boo;
};
console.log(verifyKeysValues(lesson2, 'matéria', 'História'));
