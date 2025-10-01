
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

module.exports = { getTasks, reset, addTask };