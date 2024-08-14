import getListStudentIds from './1-get_list_student_ids.js';
import getListStudents from './0-get_list_students.js';

test('getListStudentIds returns an empty array for non-array input', () => {
  expect(getListStudentIds("hello")).toEqual([]);
});

test('getListStudentIds returns correct ids for array input', () => {
  expect(getListStudentIds(getListStudents())).toEqual([1, 2, 5]);
});
