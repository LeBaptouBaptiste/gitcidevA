const { getTasks, reset, addTask, toggleTask } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
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