import setFromArray from './6-set.js';

test('setFromArray creates a set with unique elements', () => {
  expect(setFromArray([12, 32, 15, 78, 98, 15])).toEqual(new Set([12, 32, 15, 78, 98]));
});
