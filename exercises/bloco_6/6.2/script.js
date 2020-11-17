let estados = document.getElementsByTagName('option')
let array = []

for(i = 0; i < estados.length; i += 1){
    array.push(estados[i].value)
}
//console.log(array)

let arrayEstados = ["Acre", "Alagoas", "Amapá", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

let arrayEstadosValue = ["ac", "al", "ap", "ba", "ce", "df", "es", "go", "ma", "mt", "ms", "mg", "pa", "pb", "pe", "pi", "rj", "rn", "ro", "rr", "sc", "sp", "se", "to"]

document.getElementById('input-data').DatePickerX.init({
    format: 'dd/mm/yyyy',
    
})


/*let submitBtn = document.getElementById('btn-submit')

submitBtn.addEventListener('click', function(event){
    event.preventDefault()
    let data = document.getElementById('input-data').value
    let dataArray = data.split('/')
    let dia = parseInt(dataArray[0])
    let mes = parseInt(dataArray[1])
    let ano = parseInt(dataArray[2])

    if(!(dia > 0 && dia <= 31) && (mes > 0 && mes <=12) && (ano > 0)){
        alert('Erro na data')
    }
})*/

