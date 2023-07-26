// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners

loadEventlisteners();
 
// Load all event listeners 
function loadEventlisteners(){
    // add task event
   form.addEventListener('submit', addTask)
   // remove task event   
   taskList.addEventListener('click', removeTask);
    //  clear task event
    clearBtn.addEventListener('click', clearTasks);


}

function addTask(e){
    if(taskInput.value ===''){
        alert ('Add a task'); 
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
    link.className = 'delete-item  secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    // append the link to the list
    li.appendChild(link)
    // append li to ul
    taskList.appendChild(li)
    // clear input
    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.contains('delete-item')){
        if(confirm ('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }
}

// clear tasks
function clearTasks(){
    // taskList.innerHTML='';

    // faster method
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}