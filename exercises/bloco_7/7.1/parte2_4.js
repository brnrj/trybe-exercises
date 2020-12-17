const skills = ['JavaScript', 'Paciencia', 'Resiliencia', 'Foco', 'Adaptabilidade'];
const findX = (string) => 'Tryber x aqui'.replace('x', string);
const textTrybe = (string) => {
  skills.sort();
  let texto = `${string}
  Minhas cinco habilidades sao:
    `;
  skills.forEach((value) => {
    texto += `${value}
    `;
  });
  texto += '#goTrybe.';
  return texto;
};
console.log(textTrybe(findX('Bruno')));
