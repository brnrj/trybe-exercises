const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let orderEvent = (ordenar) => ordenar.sort((a, b) => a - b);

console.log(`Os numeros ${orderEvent(oddsAndEvens)} se encontram ordenados de forma crescente!`);
