const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const student = (value) => {
  const arrayKeys = Object.keys(value);
  for (i in arrayKeys) {
    console.log(`${arrayKeys[i]}, Nível :${value[arrayKeys[i]]}`);
  }
};

console.log(student(student1));
console.log(student(student2));
