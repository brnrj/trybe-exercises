const bigWord = (string) => {
  const arrayWords = string.split(' ');
  let maior = 0;
  let palavra = '';
  arrayWords.forEach((element) => {
    if (maior < element.length) {
      maior = element.length;
      palavra = element;
    }
  });
  return palavra;
};

console.log(bigWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
