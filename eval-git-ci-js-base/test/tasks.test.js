const { getTasks, reset } = require('../lib/tasks');

beforeEach(() => {
  reset();
});

test('initial task list is empty', () => {
  expect(getTasks()).toEqual([]);
});


test('add 1 + 2 + 3', ()=> {
    expect(compteur(1,2)).toBe(3);
});