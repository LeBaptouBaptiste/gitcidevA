const { getTasks, reset, addTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('ajoute une tâche valide', () => {
  reset() ;
  expect(addTask("test")).toEqual([1, "test", false]);
  expect(tasks.length).toBe(1);
});