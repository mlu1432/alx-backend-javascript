import cleanSet from './8-clean_set.js';

test('cleanSet returns a string of set values starting with a specific string', () => {
  expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), 'bon')).toBe('jovi-aparte-appetit');
  expect(cleanSet(new Set(['bonjovi', 'bonaparte', 'bonappetit', 'banana']), '')).toBe('');
  expect(cleanSet(new Set(['apple', 'banana', 'grape']), 'ba')).toBe('nana');
});
