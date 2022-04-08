document.addEventListener("DOMContentLoaded", () => {
  // Form object
  const formGrab = document.querySelector('#create-task-form')

  // Adds items to lists
  formGrab.addEventListener('submit', (e) => {
    e.preventDefault()
    // Grabs value of to-do
    lister(e.target.newtaskdescription.value)
  })

});

// Creates element to add
function lister(task){
  const elementToAdd = document.createElement('p')
  const elementTxt = task

  const xButton = document.createElement('button')
  const xButtTxt = 'X'
  xButton.textContent = xButtTxt

  // Deletes text and button of clicked
  xButton.addEventListener('click', (e) => {
    e.target.parentNode.remove()
  })

  elementToAdd.textContent = `${elementTxt} `
  elementToAdd.appendChild(xButton)
  
  document.querySelector('#tasks').appendChild(elementToAdd)
}
