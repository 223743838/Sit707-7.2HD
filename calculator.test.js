const { add, subtract } = require('./calculator');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('adds 2 + 2 to equal 4', () => {
  expect(add(2, 2)).toBe(4); 
});
