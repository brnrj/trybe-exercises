/* 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0]
for(i = 0; i < numbers.length; i++){
    if(numbers[i] < menorValor){
        menorValor = numbers[i]
    }
}

console.log(`O menor valor da lista é ${menorValor}`)