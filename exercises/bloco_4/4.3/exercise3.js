let n = 10
let triangulo= ""

for (i = 1; i <= n; i++){
    triangulo = ""
    for(j = n; j > i; j--){
        triangulo += " "
    }
    for (let k = 1; k <= i; k++){
        triangulo += "*"
    }
    console.log(triangulo)
}