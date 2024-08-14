import getListStudents from './0-get_list_students.js';
import getStudentIdsSum from './3-get_ids_sum.js';

test('getStudentIdsSum returns the correct sum of student ids', () => {
  const students = getListStudents();
  expect(getStudentIdsSum(students)).toBe(8);
});
