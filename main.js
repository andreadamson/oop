// define variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-tasks');
const filter = document.querySelector('#filter');

// load event listeners
loadEventListeners();

// define load event listeners
function loadEventListeners() {
  // page reload event
  document.addEventListener('DOMContentLoaded', getTasks);
  // add task to task list
  form.addEventListener('submit', addTask);
  // remove task from task list
  taskList.addEventListener('click', removeTask);
  // clear task list
  clearBtn.addEventListener('click', clearTasks);
  // filter task for task list
  filter.addEventListener('keyup', filterTasks);
}

// load local storage tasks
function getTasks() {
  /*
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(function(task) {
    // create li
    const li = document.createElement('li');
    // add collection-item class
    li.className = 'collection-item';
    // add task input value
    li.appendChild(document.createTextNode(task));
    // remove link with icon
    const link = document.createElement('a');
    // add css class to link
    link.className = 'delete-item secondary-content';
    // add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append a with icon to li
    li.appendChild(link); 
    // append li to ul
    taskList.appendChild(li);
  });
  */
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = '';
  } else {
    tasks = localStorage.getItem('tasks');
  }
  taskList.innerHTML = tasks;
}

// addTask
function addTask(e){
  if(taskInput.value === ''){
    alert('Lisa uus ülesanne!');
  } else {
    // create li
    const li = document.createElement('li');
    // add collection-item class
    li.className = 'collection-item';
    // add task input value
    li.appendChild(document.createTextNode(taskInput.value));
    // remove link with icon
    const link = document.createElement('a');
    // add css class to link
    link.className = 'delete-item secondary-content';
    // add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append a with icon to li
    li.appendChild(link); 
    // append li to ul
    taskList.appendChild(li);
    // store task in local storage
    storeTaskInLocalStorage(taskInput.value);
    // clear task input
    taskInput.value = '';
    e.preventDefault();
  }
}
// storeTaskInLocalStorage
function storeTaskInLocalStorage(task=null) {
  /*let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  //console.log(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  //console.log(JSON.stringify(tasks));
  */
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = '';
  } else {
    tasks = localStorage.getItem('tasks');
  }
  tasks = taskList.innerHTML;
  localStorage.setItem('tasks', tasks);
}

// removeTask
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Kas soovid kustutada أ¼lesanne?')) {
      e.target.parentElement.parentElement.remove();
      // update local storage 
      storeTaskInLocalStorage();
    }
  }
}

// clearTasks
function clearTasks(e){
  // taskList.innerHTML = ''; // slow for big data

  // faster for big data
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // clear local storage
  localStorage.clear();
}

// filterTasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent.toLowerCase();
      if(item.indexOf(text) != -1 ){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  );
}