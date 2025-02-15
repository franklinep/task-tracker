import { Task } from './task';
class TaskHandler {
    tasks: Task[];
    constructor(Tasks: Task[]) {
        this.tasks = Tasks;
    }

    createTask(description: string) {
        let task: Task = {    
            id: this.tasks.length + 1,
            description: description,
            status: 'todo',
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.tasks.push(task);
    }
    
    addTask(task: Task) {
        this.tasks.push(task);
    }

    updateTask(id: number, task: Task) {
        const index = this.tasks.findIndex(task => task.id === id);
        //this.tasks[index] = task;
        this.tasks.splice(index, 1, task);
    }

    deleteTask(id: number){
        const index = this.tasks.findIndex(task => task.id === id);
        this.tasks.splice(index, 1);
    }
}

function main(args: string[]): void {
    let myTaskHandler = new TaskHandler([]);

}