export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a String');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a Number');
    }
    if (!Array.isArray(students)) {
      throw new TypeError('students must be an Array');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') throw new TypeError('student must be a String');
    });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('name must be a String');
    }
    this._name = newName;
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('length must be a Number');
    }
    this._length = newLength;
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('students must be an Array');
    }
    newStudents.forEach((student) => {
      if (typeof student !== 'string') {
        throw new TypeError('student must be a String');
      }
    });
    this._students = newStudents;
  }
}
