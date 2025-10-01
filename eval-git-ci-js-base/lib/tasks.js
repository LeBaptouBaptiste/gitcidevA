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


module.exports = { compteur, getTasks, reset };
