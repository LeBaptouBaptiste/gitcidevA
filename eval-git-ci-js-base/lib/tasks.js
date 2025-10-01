
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

function addTask(name){
  let task = { id: nextId++, name: name.trim(), done: false };
  tasks.push(task);
  return task;
}

function toggleTask(id){
  let task = tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
  }
  return task;
}

function countDone(){
  return tasks.filter(t => t.done).length;
}

module.exports = { getTasks, reset, addTask, toggleTask, countDone };