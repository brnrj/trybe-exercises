let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

// mprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log('Bem vinda,' + ' ' + info.personagem)
  
//Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.
info.recorrente = 'Sim'
console.log(info)

//Faça um for/in que mostre todas as chaves do objeto.
for (let i in info){
console.log(i)
  }

  //Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
for(let i in info){
    console.log(info[i])
}

//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christimas on Bear Mountain",
    nota: "Dell's Four Color Comics #178",
    recorrente: 'Sim'
};

for(let key in info){
    if(key === 'recorrente'){
        info2[key] = 'Ambos recorrentes'
    }else{
        info2[key] = info[key] + ' e ' + info2[key]
    }
}
console.log(info2)