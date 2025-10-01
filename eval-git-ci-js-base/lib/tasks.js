
// Simple in-memory task list
let tasks = [];
let nextId = 1;


function getTasks() {
  return tasks;
}


function reset() {
  tasks = [];
  nextId = 1;
}

function compteur(a,b){
    return(a + b)
}

function addTask(name){
  let done = false;
  let task = { id: nextId, name: name.trim(), done: false };
  nextId += 1;
  tasks.push(task);
  return task;
}

function toggleTask(id) {
  let task = tasks.find(t => t.id === id);
  task.done = !task.done; 
  return task;
}

module.exports = { compteur, addTask, toggleTask, getTasks, reset };
