const { getTasks, addTask, toggleTask, reset, compteur } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('add 1 + 2 + 3', ()=> {
    expect(compteur(1,2)).toBe(3);
})

test('ajoute une tâche valide', () => {
  reset() ;
  expect(addTask("test")).toEqual([1, "test", false]);
  expect(tasks.length).toBe(1);
});


test('toggleTask change l’état de done', () => {
  addTask("test");
  expect(getTasks()[0]).toEqual({ id: 1, name: "test", done: false });

  expect(toggleTask(1)).toEqual({ id: 1, name: "test", done: true });
  expect(getTasks()[0].done).toBe(true);

  expect(toggleTask(1)).toEqual({ id: 1, name: "test", done: false });
  expect(getTasks()[0].done).toBe(false);
});

