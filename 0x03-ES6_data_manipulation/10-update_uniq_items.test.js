import updateUniqueItems from './10-update_uniq_items.js';
import groceriesList from './9-groceries_list.js';

test('updateUniqueItems updates items with quantity 1 to 100', () => {
  const map = groceriesList();
  updateUniqueItems(map);
  expect(map.get('Pasta')).toBe(100);
  expect(map.get('Rice')).toBe(100);
});

test('updateUniqueItems throws an error when argument is not a map', () => {
  expect(() => {
    updateUniqueItems({});
  }).toThrow('Cannot process');
});
