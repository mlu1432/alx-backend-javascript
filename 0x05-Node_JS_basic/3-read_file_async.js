const fs = require('fs');

/**
 * Asynchronously reads and processes a CSV file.
 * @param {string} path - Path to the CSV file.
 * @returns {Promise} - A promise that resolves when the file is read.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Reading the file asynchronously
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      // Splitting the file content into lines and skipping the header
      const lines = data.trim().split('\n').slice(1);

      if (lines.length === 0) {
        reject(new Error('Cannot load the database'));
        return;
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

      resolve();
    });
  });
}

module.exports = countStudents;
