import getListStudents from './0-get_list_students.js';
import updateStudentGradeByCity from './4-update_grade_by_city.js';

test('updateStudentGradeByCity returns students with updated grades for a specific city', () => {
  const students = getListStudents();
  const newGrades = [
    { studentId: 5, grade: 97 },
    { studentId: 1, grade: 86 }
  ];
  const result = updateStudentGradeByCity(students, 'San Francisco', newGrades);
  const expected = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 86 },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
  ];
  expect(result).toEqual(expected);
});

test('updateStudentGradeByCity assigns "N/A" when no grade is available', () => {
  const students = getListStudents();
  const newGrades = [
    { studentId: 5, grade: 97 }
  ];
  const result = updateStudentGradeByCity(students, 'San Francisco', newGrades);
  const expected = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco', grade: 'N/A' },
    { id: 5, firstName: 'Serena', location: 'San Francisco', grade: 97 }
  ];
  expect(result).toEqual(expected);
});
