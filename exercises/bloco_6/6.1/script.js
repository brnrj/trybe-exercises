let submitButton = document.getElementById('btn-submit')

function pararEvento(event){
    event.preventDefault()
}

submitButton.addEventListener('click', pararEvento)