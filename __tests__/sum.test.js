import { sum } from '../src/sum';
// const sum = require('../src/mathForTest');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});