// Define UI Variables
const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document-querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

loadEventlisteners();
 
// Load all event listeners 
function loadEventlisteners(){
   form.addEventListener('submit', addTask)
}
function addTask(e){
    if(taskInput.value===''){
        alert ('Add a task')
    }
    // create li element
    const li = document.createElement('li')
    // add class
    li.className = 'collection-item'
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a')
    // ad class to link
    link.className = 'delete-item'
    e.preventDefault();
}