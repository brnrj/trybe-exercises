function solution(number){
    let array = []
    let soma = 0
    for(i = 0; i < number; i += 1){
        if(i % 3 === 0 || i % 5 === 0){ 
            array.push(i)
        }
    }for(j in array){
        soma += array[j]
    }
    return soma
}
console.log(solution(50))