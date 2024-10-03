const fs = require('fs');

/**
 * Function to count and display students from a CSV file
 * @param {string} path - Path to the CSV file
 */
function countStudents(path) {
  try {
    // Reading the file synchronously
    const data = fs.readFileSync(path, 'utf-8');

    // Splitting the file content into lines and skipping the header
    const lines = data.trim().split('\n').slice(1);

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Initialize student field groups
    const students = {};
    let totalStudents = 0;

    // Process each line in the CSV file
    lines.forEach((line) => {
      const student = line.split(',');
      const firstName = student[0].trim();
      const field = student[3].trim();

      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstName);
      totalStudents += 1;
    });

    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    for (const field in students) {
      if (Object.prototype.hasOwnProperty.call(students, field)) {
        const firstNames = students[field].join(', ');
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${firstNames}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
