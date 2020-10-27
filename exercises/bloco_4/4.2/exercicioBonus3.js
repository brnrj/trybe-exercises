/*Agora você irá criar um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push. O resultado deve ser o array abaixo:*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMult = []

for(let i = 0; i < numbers.length - 1; i++){
    for(let j = 0; j < numbers.length - 1; j++){
        if(i = j + 1) {
            let posicao = numbers[i] * numbers[j]
         numbersMult.push(posicao)
        }       
    }    
}
let lastPosition = numbers[numbers.length - 1] * 2
numbersMult.push(lastPosition)
console.log(numbersMult)