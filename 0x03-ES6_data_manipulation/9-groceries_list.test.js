import groceriesList from './9-groceries_list.js';

test('groceriesList returns a map with the correct grocery items and quantities', () => {
  const groceries = groceriesList();
  expect(groceries.get('Apples')).toBe(10);
  expect(groceries.get('Tomatoes')).toBe(10);
  expect(groceries.get('Pasta')).toBe(1);
  expect(groceries.get('Rice')).toBe(1);
  expect(groceries.get('Banana')).toBe(5);
});
