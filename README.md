# task-tracker
Let's work with ts-node is a Typescript execution engine and Read-Eval-Print-Loop (REPL) for Node.js. 
## Installation
~~~
# Locally in your project.
npm install -D typescript
npm install -D ts-node

# Or globally with TypeScript.
npm install -g typescript
npm install -g ts-node

# tslib as a help for typescript for compiling, and types/node defines types for Node
npm install -D tslib @types/node

# tsconfig.ts generate
tsc --init
~~~

## Do u want to test it? so keep this instructions
~~~
# install the packages
npm i

# start and test
npm start task-cli <args[]>

args[]
* add "<description>" : Add a new task
* update <id> "<new_description>": Update a task
* delete <id>: Delete a task
* list: List all the tasks (status default: todo)
* mark-in-progress <id> : set the status in progress 
* mark-done <id> : set the status in done
--> Filters by its status
* list todo
* list in-progress
* list done 
~~~
### Example
~~~
# add some examples
npm start task-cli add "Take the TOEFL EXAM"
npm start task-cli add "Go to the"
npm start task-cli add "If you read this, thanks for your interest"

# list todo tasks (status: todo)
npm start task-cli list

# update and delete a task
npm start task-cli update 2 "Go to the Grocery Shop"
npm start task-cli delete 2

# Mark as a in-progress a task and list
npm start mark-in-progress 1
npm start list in-progress

# Mark as done a task and list
npm start task-cli mark-done 1
npm start list done
~~~

## Referencias
* [challenge-at](https://roadmap.sh/projects/task-tracker)
* [handbook-typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
* [ts-node](https://www.npmjs.com/package/ts-node)
* [file-system](https://nodejs.org/api/fs.html#file-system)
* [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)