import { TaskHandler } from './taskHandler';
import { readFile, writeFile } from 'fs/promises';
import { existsSync, stat, Stats } from 'fs';
import { createInterface } from 'readline';

const fileName = 'tasks.json';

async function main() {
    if (!existsSync(fileName)) {
        await writeFile(fileName, '[]');
    }

    const fileContent = await readFile(fileName, 'utf-8');
    let existingTasks = JSON.parse(fileContent);
    let my_taskhandler = new TaskHandler(existingTasks);

    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'task-cli '
    });

    rl.prompt();

    rl.on('line', async (line) => {
        const args = line.trim().split(' ');
        try {
            // Procesar comandos
            switch (args[0]) {
                case "add":
                    if (!args[1]) throw new Error("Falta la descripción");
                    const newTask = my_taskhandler.createTask(args[1]);
                    my_taskhandler.addTask(newTask);
                    break;

                case "update":
                    const id = parseInt(args[1]);
                    const description = args.slice(2).join(' ');
                    my_taskhandler.updateTask(id, { description });
                    break;

                case "list":
                    console.log(my_taskhandler.tasks);
                    break;

                case "exit":
                    rl.close();
                    return;

                default:
                    console.log("Comando no reconocido");
            }

            // Guardar cambios después de cada operación
            await writeFile(fileName, JSON.stringify(my_taskhandler.tasks, null, 2));
        } catch (error) {
            if (error instanceof Error) {
                console.error("Error:", error.message);
            } else {
                console.error("Error:", error);
            }
        }
        rl.prompt();
    });

    rl.on('close', () => {
        console.log('Saliendo del CLI...');
        process.exit(0);
    });
}

main();