import createInt8TypedArray from './5-typed_arrays.js';

test('createInt8TypedArray creates a buffer with the correct value', () => {
  const dataView = createInt8TypedArray(10, 2, 89);
  expect(dataView.getInt8(2)).toBe(89);
});

test('createInt8TypedArray throws an error when position is outside range', () => {
  expect(() => {
    createInt8TypedArray(10, 20, 89);
  }).toThrow('Position outside range');
});
