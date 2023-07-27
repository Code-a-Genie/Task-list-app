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
    //  DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
   form.addEventListener('submit', addTask)
   // remove task event   
   taskList.addEventListener('click', removeTask);
    //  clear task event
    clearBtn.addEventListener('click', clearTasks);
    // filter task event
    filter.addEventListener('keyup', filterTasks)


}

// get tasks from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks= [];
    }else{ 
        // because local storagr only store info in strings we have to use JSON.parse

        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li = document.createElement('li')
    // add class  
    li.className = 'collection-item'
    // create text node and append to li
    li.appendChild(document.createTextNode(tasks)); 
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
    })
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

     // store in local storage
     storeTaskInLocalStorage(taskInput.value); 


    // clear input
    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e){
    if(e.target.parentElement.contains('delete-item')){
        if(confirm ('Are you sure?')){
        e.target.parentElement.parentElement.remove();

        // remove from LS
        removeTaskFromLocalStorage(e.target.parentElement.parentElement); 
        }
    }
}
function  removeTaskFromLocalStorage(taskItem){
    if(localStorage.getItem('tasks')===null){
        tasks= [];
    }else{ 
        // because local storagr only store info in strings we have to use JSON.parse

        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        if(taskItem.textContent === task){
            tasks.splice(index,1);
        }
    })
}

// clear tasks
function clearTasks(){ 
    // taskList.innerHTML='';

    // faster method
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // Clear from LS
    clearTasksFromLocalStorage();
}
function clearTasksFromLocalStorage(){
    localStorage.clear()
}

// filter tasks 
function filterTasks(e){
   const text = e.target.value.toLowerCase(); 
   document.querySelectorAll('.collection-item').forEach(function (task){
    const item =task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
        task.style.display = 'block'
    }else{
        task.style.display = 'none';
    }
   });
}

function storeTaskInLocalStorage(task){
  let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks= [];
    }else{ 
        // because local storagr only store info in strings we have to use JSON.parse

        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);

    localStorage.setItem('task',JSON.stringify(tasks));
} 