/*
//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
function verificaPalindromo(string){
    let palavra = string
    let palavraInvertida = palavra.split('').reverse().join('')
    if(palavra === palavraInvertida){
        console.log(true)
    }else{
        console.log(false)
    }
}
verificaPalindromo('barata')

//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let arrayTeste = [2, 3, 6, 7, 10, 1];

function retornaIndice(array){
    let numbers = array
    let bigNumber = 0
    let index = 0
    for(key in numbers){
        if(numbers[key] > numbers[0]){
            bigNumber = numbers[key]
            index = key
        }  
    }console.log(index)
}    
retornaIndice(arrayTeste)

//Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let arrTest = [2, 4, 6, 7, 10, 0, -3];

function retMenorValor(array){
    let number = array
    let lowNumber = arrTest[0]
    let index = 0
    for (i in array){
        if(number[i] < lowNumber){
            lowNumber = number[i]
            index = i
        }
    }console.log(index)
}
retMenorValor(arrTest)

//Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
*/
let arrNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array){
    let nomes = array
    let arrayQtdCr = []
    let bigName = ""
    let index = ""
    for (i in nomes){
        arrayQtdCr.push(nomes[i].length)
    }
    for (j in arrayQtdCr){
        if(arrayQtdCr[j] > arrayQtdCr[j-1]){
            bigName = arrayQtdCr[j]
            index = j
            
        }
    }console.log(nomes[index])
}
maiorNome(arrNomes)