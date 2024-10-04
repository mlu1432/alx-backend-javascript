const express = require('express');
const fs = require('fs');
const path = require('path');

// Function to read the CSV file asynchronously and process student data
function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    if (!filePath) reject(new Error('Cannot load the database'));

    const studentsByField = {};
    let totalStudents = 0;

    // Read the file asynchronously
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

      lines.shift(); // Remove the header line

      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
        totalStudents += 1;
      });

      let output = `Number of students: ${totalStudents}\n`;
      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          output += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
        }
      }

      resolve(output.trim());
    });
  });
}

// Create an Express instance
const app = express();

// Handle the root route "/"
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Handle the "/students" route
app.get('/students', (req, res) => {
  const databaseFile = process.argv[2]; // Get the database file path from the command line argument

  // Call countStudents to get the student data
  countStudents(databaseFile)
    .then((studentData) => {
      res.send(`This is the list of our students\n${studentData}`);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

// Start the server on port 1245
app.listen(1245, () => {
  console.log('Express server running on port 1245');
});

module.exports = app;
