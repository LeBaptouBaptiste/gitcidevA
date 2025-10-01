const { getTasks, reset, addTask, toggleTask, countDone } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});

test('toggleTask change l’état de done', () => {
  addTask("test");
  expect(getTasks()[0]).toEqual({ id: 1, name: "test", done: false });

  expect(toggleTask(1)).toEqual({ id: 1, name: "test", done: true });
  expect(getTasks()[0].done).toBe(true);

  expect(toggleTask(1)).toEqual({ id: 1, name: "test", done: false });
  expect(getTasks()[0].done).toBe(false);
});

test('addTask adds a new task', () => {
  const task = addTask('Test task');
  expect(task).toEqual({ id: 1, name: 'Test task', done: false });
  expect(getTasks()).toEqual([task]);
});

test('toggleTask toggles the done status', () => {
  const task = addTask('Another task');
  expect(task.done).toBe(false);
  const toggledTask = toggleTask(task.id);
  expect(toggledTask.done).toBe(true);
  const toggledAgainTask = toggleTask(task.id);
  expect(toggledAgainTask.done).toBe(false);
});

test('countDone counts completed tasks', () => {
  const task1 = addTask('Task 1');
  const task2 = addTask('Task 2');
  expect(countDone()).toBe(0);
  toggleTask(task1.id);
  expect(countDone()).toBe(1);
  toggleTask(task2.id);
  expect(countDone()).toBe(2);
  toggleTask(task1.id);
  expect(countDone()).toBe(1);
});