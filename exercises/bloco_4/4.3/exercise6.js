let primo = 391
let array = []

for (i = 1; i <= primo; i++){
    if(primo % i === 0){
        array.push(i)
    }
}

let div = array.length

if (div === 1){
    console.log('O numero 1 é primo.')
}else if (div === 2){
    console.log(`O número ${primo} é primo.`)
}else{
    console.log(`O número ${primo} não é primo.`)
}