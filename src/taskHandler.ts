import { get } from 'http';
import { Task } from './task';
export class TaskHandler {
    tasks: Task[];
    constructor(Tasks: Task[]) {
        this.tasks = Tasks;
    }

    private getNextId(): number {
        if (this.tasks.length === 0) return 1;
        const maxId = Math.max(...this.tasks.map(task => task.id)); // ids: [1, 5, 7] -> 7
        return maxId + 1;
    }

    createTask(description: string) {
        let task: Task = {    
            id: this.getNextId(),
            description: description,
            status: 'todo',
            createdAt: new Date(),
            updatedAt: new Date()
        };
        return task;
    }
    
    addTask(task: Task) {
        this.tasks.push(task);
        console.log("Task added successfully (ID: " + task.id + ")");
    }

    updateTask(id: number, newTaskValue: Pick<Task, 'description' | 'status'>){ 
        let task = this.tasks.find(task => task.id === id);
        // si no existe
        if(task === undefined){
            throw new Error("Task not found");
        }
        // Actualizamos segun los valores que se pasen en el objeto task Task
        if(newTaskValue.status !== null){
            task.status = newTaskValue.status;
            task.updatedAt = new Date();
        }
        if(newTaskValue.description !== null){
            task.description = newTaskValue.description;
            task.updatedAt = new Date();
        }
    }

    deleteTask(id: number){
        let index = this.tasks.findIndex(task => task.id === id);
        // si no existe 
        if(index === -1){
            throw new Error("Task not found");
        }
        this.tasks.splice(index, 1);
    }
}
