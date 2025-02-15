import { TaskHandler } from './taskHandler';
import { readFile, writeFile } from 'fs/promises';
import { existsSync, stat, Stats } from 'fs';
import { Task, TaskStatus } from './task';

async function main(args: string[]): Promise<void> {
    const fileName = 'tasks.json'
    if (!existsSync(fileName)) {
        await writeFile(fileName, '[]');
    }
    const fileContent = await readFile(fileName, 'utf-8');
    let existingTasks = JSON.parse(fileContent) as Array<Task>;
    let my_taskhandler = new TaskHandler(existingTasks);
    
    // ---> 
    if (args[0] !== "task-cli") {
        throw new Error("Invalid command. Please use 'task-cli' to run the CLI.");
      }

    let arg1: string = args[1];
    switch (arg1) {
      case "add":
        try {
          let new_task = my_taskhandler.createTask(args[2]);
          my_taskhandler.addTask(new_task);
          await writeFile(fileName, JSON.stringify(existingTasks, null, 2));
        } catch (error) {
            console.error('Error:', error);
        }
        break;

      case "update":
        try {
          let id_task = parseInt(args[2]);
          let description = args[3];
          my_taskhandler.updateTask(id_task, {description: description});
          await writeFile(fileName, JSON.stringify(existingTasks, null, 2));
        }
        catch (error) {
            console.error('Error:', error);
        }
        break;

      case "delete":
        try {
          let id_task = parseInt(args[2]);
          my_taskhandler.deleteTask(id_task);
          await writeFile(fileName, JSON.stringify(existingTasks, null, 2));
        }
        catch (error) {
            console.error('Error:', error);
        }
        break;

      case "mark-in-progress":
        try{
          let id_task = parseInt(args[2]);
          my_taskhandler.updateTask(id_task, {status: "in-progress"});
          await writeFile(fileName, JSON.stringify(existingTasks, null, 2));
        }
        catch (error) {
            console.error('Error:', error);
        }
        break;

      case "mark-done":
        try{
          let id_task = parseInt(args[2]);
          my_taskhandler.updateTask(id_task, {status: "done"});
          await writeFile(fileName, JSON.stringify(existingTasks, null, 2));
        }
        catch (error) {
            console.error('Error:', error);
        }
        break;
        
      case "list":
        const statusArg = args[2] as TaskStatus; // type assertion
        if (statusArg && !['todo', 'in-progress', 'done'].includes(statusArg)) {
          console.error('Error: Status must be one of <<todo, in-progress, done>>');
          break;
        }
        const statusTasks = statusArg ? existingTasks.filter(task => task.status === statusArg) : existingTasks;
        console.log(statusTasks);
        break;
    }
}

main(process.argv.slice(2)); // ts-node .\src\main.ts