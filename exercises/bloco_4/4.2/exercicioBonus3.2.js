let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMult = []

for (let i = 0; i < numbers.length; i++){
    if(i + 1 < numbers.length){
        let posicao = numbers[i] * numbers[i + 1]
        numbersMult.push(posicao)
    }else{
        let ultPosicao = numbers[i] * 2
        numbersMult.push(ultPosicao)
    }
}
console.log(numbersMult)