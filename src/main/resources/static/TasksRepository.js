class TasksRepository {
    create(task){
        window.localStorage.setItem(task.id,JSON.stringify(task))
    }

    update(id, task){

    }

    delete (id){
        window.localStorage.removeItem(id)
    }

    getAllTasks(){
        let tasks = []
        let keys = Object.keys(localStorage)
        keys.forEach(function(key){
            let task = JSON.parse(localStorage.getItem(key))
            tasks.push(task)
        })

        return tasks
    }

    getTask(id) {

    }
}

