import hasValuesFromArray from './7-has_array_values.js';

test('hasValuesFromArray returns true if all elements in the array exist in the set', () => {
  expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1])).toBe(true);
  expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10])).toBe(false);
  expect(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10])).toBe(false);
});
