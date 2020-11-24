const fatorial = (n) => {
  if (n === 0) {
    return console.log(1);
  }
  let resultado = n;
  while (n > 2) {
    resultado *= --n;
  }
  return console.log(resultado);
};
fatorial(15);
