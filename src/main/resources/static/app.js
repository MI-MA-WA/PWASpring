const addTodoButton = document.getElementById("addTask")
const tasksRepository = new TasksRepository()

renderTasks()

addTodoButton.addEventListener("click",function(){
    const taskName = document.getElementById("task").value;

    if(!taskName)
        return
    else
        document.getElementById("task").value = ""

    let task = new Task(taskName);
    tasksRepository.create(task)

    renderTasks()


})

function renderTasks(){
    let tasks = tasksRepository.getAllTasks()
    let html = "<ul>"
    for (let i = 0 ; i < tasks.length; i++){
        let task = tasks[i];
        html+= `<li>${task.name} <button  onclick="deleteTask('${task.id}')">done</button></li>`
    }
    html += "</ul>"
    document.getElementById("tasksList").innerHTML = html
}

function deleteTask(id){
    localStorage.removeItem(id)
    renderTasks()
}
