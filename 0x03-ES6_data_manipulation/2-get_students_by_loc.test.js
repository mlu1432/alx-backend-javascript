import getListStudents from './0-get_list_students.js';
import getStudentsByLocation from './2-get_students_by_loc.js';

test('getStudentsByLocation returns students in the specified city', () => {
  const students = getListStudents();
  const city = 'San Francisco';
  const expected = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  expect(getStudentsByLocation(students, city)).toEqual(expected);
});

test('getStudentsByLocation returns an empty array if no students are in the specified city', () => {
  const students = getListStudents();
  const city = 'New York';
  expect(getStudentsByLocation(students, city)).toEqual([]);
});
