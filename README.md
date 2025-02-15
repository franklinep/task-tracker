# task-tracker
Project URL: https://github.com/franklinep/task-tracker \
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
npm start
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
npm start
# add some examples
task-cli add "Take the TOEFL EXAM"
task-cli add "Go to the"
task-cli add "If you read this, thanks for your interest"

# list todo tasks (status: todo)
task-cli list

# update and delete a task
task-cli update 2 "Go to the Grocery Shop"
task-cli delete 2

# Mark as a in-progress a task and list
task-cli mark-in-progress 1
task-cli list in-progress

# Mark as done a task and list
task-cli mark-done 1
task-cli list done
~~~

## Referencias
* [challenge-at](https://roadmap.sh/projects/task-tracker)
* [handbook-typescript](https://www.typescriptlang.org/docs/handbook/intro.html)
* [ts-node](https://www.npmjs.com/package/ts-node)
* [file-system](https://nodejs.org/api/fs.html#file-system)
* [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)