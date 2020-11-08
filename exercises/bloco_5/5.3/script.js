function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Exercício 1:
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  const days = document.getElementById('days')

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dezDays = dezDaysList[i]
    let createDays = document.createElement('li')

    if (dezDays === 24 || dezDays === 31) {
      createDays.className = 'day holiday'
      createDays.innerHTML = dezDays
      days.appendChild(createDays)
    }else if (dezDays === 4 || dezDays === 11 || dezDays === 18) {
      createDays.className = 'day friday-day'
      createDays.innerHTML = dezDays
      days.appendChild(createDays)
    } else if (dezDays === 25) {
      createDays.className = 'day holiday friday-day'
      createDays.innerHTML = dezDays
      days.appendChild(createDays)
    }else {
      createDays.className = 'day'
      createDays.innerHTML = dezDays
      days.appendChild(createDays)      
    }
  }
}
createDays();

// Exercício 2:
function createBtn(parametro) {
  let btn = document.createElement('button')
  let paiBtn = document.querySelector('.buttons-container')
  btn.id = 'btn-holiday'
  btn.innerHTML = parametro
  paiBtn.appendChild(btn)

}
createBtn('Feriados')

//Exercício 3:
function changeHolidayColor(){
  let button = document.querySelector('#btn-holiday')
  let holiday = document.querySelectorAll('.holiday')
  let back = 'rgb(238,238,238)'
  let newColor = 'green'
  
  button.addEventListener('click', function(){
    for (i = 0; i < holiday.length; i += 1){
      if(holiday[i].style.backgroundColor === newColor){
        holiday[i].style.backgroundColor = back
      }else{
        holiday[i].style.backgroundColor = newColor
      }
    }
  })
}
changeHolidayColor()

//Exercicio 4

function friday(parametro){
  let divPai = document.querySelector('.buttons-container')
  let button = document.createElement('button')
  button.id = 'btn-friday'
  button.innerHTML = parametro
  divPai.appendChild(button)
}
friday('Sexta-Feira')

//Exercicio 5

function sextou(array){
  let button = document.querySelector('#btn-friday')
  let day = document.querySelectorAll('.friday-day')
  let sexta = 'SEXTOU!'
  button.addEventListener('click',function(){
    for(i = 0; i < day.length; i += 1){
      if(day[i].innerHTML !== sexta){
        day[i].innerHTML = sexta
      }else{
        day[i].innerHTML = array[i]
      }
    }
  })
}
let dezFridays = [ 4, 11, 18, 25 ];
sextou(dezFridays)

//Exercicio 6

function mouseOver(){
  let days = document.querySelector('#days')

  days.addEventListener('mouseover', function(event){
    event.target.style.fontSize = '30px'
    event.target.style.fontWeight = '600'
  })
}

function mouseOut(){
  let days = document.querySelector('#days')

  days.addEventListener('mouseout',function(event){
    event.target.style.fontWeight = '200'
    event.target.style.fontSize = '20px'
  })
}
mouseOver()
mouseOut()

//Exercicio 7

function span(tarefa){
  let divPai = document.querySelector('.my-tasks')
  let nomeTarefa = document.createElement('span')
  
  nomeTarefa.innerHTML = tarefa
  divPai.appendChild(nomeTarefa)
}
span('Valeu Valeu!')

//Exercicio 8

function addCor(parametro){
  let divPai = document.querySelector('.my-tasks')
  let nomeTarefa = document.createElement('div')

  nomeTarefa.className = 'task'
  nomeTarefa.style.backgroundColor = parametro
  divPai.appendChild(nomeTarefa)
}
addCor('red')

//Exercicio 9

function addClass(){
  let selecionaTarefa = document.getElementsByClassName('task slected')
  let tarefa = document.querySelector('.task')

  tarefa.addEventListener('click', function(event){
    if(selecionaTarefa.length === 0){
      event.target.className = 'task selected'
    }
    else{
      event.target.className = 'task'
    }
  })
}
addClass()

//Exercicio 10

function addColor(){
  let selecionaTarefa = document.getElementsByClassName('task selected')
  let dias = document.querySelector('#days')
  let divTarefa = document.querySelector('.task')
  let corTarefa = divTarefa.style.backgroundColor

  dias.addEventListener('click', function(event){
    let corEvento = event.target.style.addColor
    if(selecionaTarefa.length > 0 && corEvento !== corTarefa){
      let cor = selecionaTarefa[0].style.backgroundColor
      event.target.style.color = cor
    }else if (corEvento === corTarefa && selecionaTarefa.length !== 0){
      event.target.style.color = 'rgb(119,119,119)'
    }
  })
}
addColor()