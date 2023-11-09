const input = document.getElementById("to-do-input");
const container = document.getElementById("container");
const createBtn = document.getElementById("create");

let tasks = [];

let task = {
  id: null,
  value: "",
  completed:false,
};

function renderTasks(){
    container.innerHTML = ""; 
    tasks.forEach(task=>{
        const taskContainer = document.createElement('div');
       

        const checkBtn = document.createElement('input');
        checkBtn.type=  'checkbox'
        taskContainer.innerHTML = task.value ;
        const deleteBtn = document.createElement('button'); 
        deleteBtn.classList.add('delete-btn')
        deleteBtn.innerHTML = 'Delete Task'
        
        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
          });
        
          checkBtn.addEventListener('change', () => {
            toggleTaskCompletion(task.id);
           
        });
        
          taskContainer.appendChild(checkBtn)
          taskContainer.appendChild(deleteBtn)
          container.appendChild(taskContainer)
          console.log(tasks)
    })
   
   
}


createBtn.addEventListener("click", () => {
    const newTask = Object.create(task);
    newTask.id = Math.floor(Math.random() * 1000);
    newTask.value = input.value;
    tasks.push(newTask); 
    renderTasks()
})
function deleteTask(id){
    tasks = tasks.filter(task=>task.id !== id )
    renderTasks()
}
function toggleTaskCompletion(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
    }
    completedTask = tasks[taskIndex]; 
    console.log(completedTask)
   
}