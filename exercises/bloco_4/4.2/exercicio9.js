let numeros = []

for (let i = 1; i < 26; i++){
    numeros.push(i)
}
for (let j = 0; j < numeros.length; j++){
    console.log(`O número da posição ${j} dividido por dois é igual a ${numeros[j] / 2}`)
}