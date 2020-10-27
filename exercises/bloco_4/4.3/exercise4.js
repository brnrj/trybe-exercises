const num = 11

for(let i = 1; i <= num; i += 2){
    let qtdAst = i
    let triangle_line = ""
    qtdSpaces = (num - qtdAst) /2

    for(let j = 1; j <= qtdSpaces ; j++){
        triangle_line += " "
    }
    for (let k = 1;k <= qtdAst; k++ ){
        triangle_line += "*"
    }
    console.log(triangle_line)
}
