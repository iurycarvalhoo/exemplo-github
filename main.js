//import './style.css'

//$('task-description').val()
const $ = document.querySelector.bind(document)

const addTask =(event)=>{
  event.preventDefault()
  const taskDescription= $('#task-description').value

  const newTaskitem= `
   <li>${taskDescription}</li>
  `

  $('#task-list').insertAdjacentHTML('beforeend', newTaskitem)
 // $('#task-description').value= ''
 $('#task-form').reset()
}

