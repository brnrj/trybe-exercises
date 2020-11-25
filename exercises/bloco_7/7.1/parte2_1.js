const fatorial = (n) => {
  if (n === 0) {
    return 1;
  }
  let resultado = n;
  while (n > 2) {
    resultado *= --n;
  }
  return resultado;
};
console.log(fatorial(1));
