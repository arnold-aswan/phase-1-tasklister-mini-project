document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById('new-task-description');
  const form = document.querySelector('form');
  
  form.addEventListener("submit", handleSubmit)
});


const handleSubmit = function(e) {
  e.preventDefault();
  const toDos = document.querySelector('div#list ul#tasks')
  let inputValue = document.querySelector('#new-task-description').value;

  if(inputValue === '') {
    alert('Please enter a task description!');
  } else {
  const task = document.createElement('li')
  task.textContent = inputValue
  task.className = `tasks`

  const removeTask = document.createElement('button')
  removeTask.textContent = 'Delete'
  removeTask.className = 'btn-remove btn'
  removeTask.addEventListener('click', deleteTask)

  const selectpriority = document.createElement('select')
  const select = document.createElement('option')
  select.value = 'select'
  select.textContent = 'select'

  const high = document.createElement('option')
  high.value = 'high'
  high.textContent = 'High'

  const medium = document.createElement('option')
  medium.value = 'medium'
  medium.textContent = 'Medium'

  const low = document.createElement('option')
  low.value = 'low'
  low.textContent = 'Low'

  selectpriority.appendChild(select);
  selectpriority.appendChild(high);
  selectpriority.appendChild(medium);
  selectpriority.appendChild(low);

  selectpriority.addEventListener("change", handlePriority)

  task.appendChild(removeTask)
  task.appendChild(selectpriority)
  toDos.appendChild(task)
  }
  
}

// delete elements function
function deleteTask(e) {
  e.target.parentNode.remove()
}

// selecting priority function
function handlePriority(e) {
  const selected = e.target

  if(selected.value === 'medium') {
    selected.parentNode.style.color = `yellow`
  } else if(selected.value === 'high') {
    selected.parentNode.style.color = `red`;
  } else if(selected.value === 'low') {
    selected.parentNode.style.color = `green`
  } else {
    selected.parentNode.style.color = `black`
  }
  
}


