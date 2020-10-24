// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b, definidas no começo com os valores que serão operados. Faça programas para:

let a = 10
let b = 5

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

// 2 -Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

if (a > b){
    console.log(a)
}else {
    console.log(b)
}

// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let c = 15
let d = 20
let e = 30

if (c > d && c > e){
    console.log(c)
}else if (d > c && d > e){
    console.log(d)    
}else {
    console.log(e)
}

// 4- Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let f = 0

if (f / 1 >0 ){
    console.log('Positive')
}else if (f / 1 < 0){
    console.log('Negative')
}else{
    console.log('Zero')
}

// 5- Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
/*Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.*/

let g = 60
let h = 60
let i = 69

if ((g + h + i) === 180){
    console.log(true)
}else {
    console.log(false)
}

/* 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals*/

let chess = 'peão'
let chessLower = chess.toLocaleLowerCase()


switch (chessLower) {
    case "rei":
        console.log('Se move em todas as direçoes, uma casa de cada vez')
        break;

    case "rainha":
        console.log('Se move em todas as direções, quantas casas quiser, desde que estejam livres')
        break;
    
    case "torre":
        console.log('Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser')
        break;
    
    case "bispo":
        console.log('Move-se na diagonal,quantas casas quiser')
        break;

    case "cavalo":
        console.log('Pode andar duas casas na vertical e uma na horizontal ou duas na horizontal e uma na vertical')
        break;

    case "peão":
        console.log('Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.')
        break;
    default:
        console.log('Error')
}

/* 7 - Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let nota = 101

if (nota >= 90 && nota <= 100){
    console.log('Conceito A')
}else if (nota < 90 && nota >= 80){
    console.log('Conceito B')
}else if (nota < 80 && nota >= 70){
    console.log('Conceito C')
}else if (nota < 70 && nota >= 60){
    console.log('Conceito D')
}else if (nota <60 && nota >= 50){
    console.log('Conceito E')
}else if (nota < 50 && nota >= 0){
    console.log('Conceito F')
}else{
    console.log('Error')
}

/* 8 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

let j = 36
let k = 56
let l = 98

if (j % 2 === 0 || k % 2 === 0 || l % 2 === 0){
    console.log(true)
}else{
    console.log(false)
}

/* 9 - Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if*/

if (j % 2 !== 0 || k % 2 !== 0 || l % 2 !== 0){
    console.log(true)
}else{
    console.log(false)
}

/* 10 - Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)*/

let valorCusto = 5000
let valorVenda = 7500
let impostoSobreCusto = (valorCusto * 20) / 100
let valorCustoTotal = valorCusto + impostoSobreCusto
let lucro = valorVenda - valorCustoTotal

if (valorCusto || valorVenda > 0){
    console.log(lucro * 1000)
}else {
    console.log('error')
}

/* 11 - Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
INSS
Salário bruto até R$ 1.556,94: alíquota de 8%
Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,00 parcela a se deduzir do imposto.
Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55. */

let salarioBruto = 10000
let inss_8 = (salarioBruto * 8) / 100
let inss_9 = (salarioBruto * 9) / 100
let inss_11 = (salarioBruto * 11) / 100
let inss_max = 570.88




if (salarioBruto < 1556.94){
    let salarioBase = salarioBruto - inss_8
    console.log('Seu salário base é de ' + salarioBase)
}else if (salarioBruto >= 1556.94 && salarioBruto <= 2594.92){
    let salarioBase = salarioBruto - inss_9
    if(salarioBase <= 1903.98){
        console.log('Seu salário líquido é de ' + salarioBase)
    }else if(salarioBase >= 1903.98 && salarioBase <= 2594.92){
        salarioLiq = salarioBase - ((salarioBase * 7.5) / 100) + 142.80
        console.log('Seu salário líquido é de ' + salarioLiq)
    }
}else if (salarioBruto > 2594.93 && salarioBruto <= 5189.82){
    let salarioBase = salarioBruto - inss_11
    if (salarioBase >= 2826.66 && salarioBase <= 3751.05){
        salarioLiq = salarioBase - ((salarioBase * 15) / 100) + 354.8
        console.log('Seu salário líquido é de ' + salarioLiq)
    }else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
        salarioLiq = salarioBase - ((salarioBase * 22.5) / 100) + 636.13
        console.log('Seu salário líquido é de ' + salarioLiq)
    }else if (salarioBase > 4664.68){
        salarioLiq = salarioBase - ((salarioBase * 27.5) / 100) + 869.36
        console.log('Seu salário líquido é de ' + salarioLiq)
    }
}else if (salarioBruto > 5189.82){
    let salarioBase = salarioBruto - inss_max
    salarioLiq = salarioBase - ((salarioBase * 27.5) / 100) + 869.36
    console.log('Seu salário base é de ' + salarioLiq)
}