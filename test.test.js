const { findNumbers, sumElements } = require('./exercises');

test('testArray', () => {
  expect(findNumbers([1, 2, 2])).toEqual([3]);
});

test('Example 1 1', () => {
  expect(findNumbers([4,3,2,7,8,2,3,1])).toEqual([5,6]);
});

test('Example 1 2', () => {
  expect(findNumbers([1,1])).toEqual([2]);
});

test('example 2 1', () => {
  expect(sumElements([2,15,11,7], 9)).toEqual([0,3]);
});

test('example 2 2', () => {
  expect(sumElements([3,2,4], 6)).toEqual([1,2]);
});

test('example 2 3', () => {
  expect(sumElements([3,3], 6)).toEqual([0,1]);
});