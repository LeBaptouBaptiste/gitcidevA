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
  let task = [nextId, name.trim(), done];
  nextId += 1;
  tasks.push(task);
  return task;
}

module.exports = { compteur, addTask, getTasks, reset };
