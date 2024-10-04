const http = require('http');
const fs = require('fs');
const path = require('path');

/**
 * Reads the CSV file asynchronously and processes the student data.
 * @param {string} filePath - Path to the CSV file.
 * @returns {Promise<string>} - A promise that resolves with the formatted student data.
 */
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

      // Split the CSV data into lines and filter out any empty lines
      const lines = data.split('\n').filter(line => line.trim() !== '');

      // Remove the first line (header)
      lines.shift();

      // Process each student line
      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');
        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
        totalStudents += 1;
      });

      // Create the output for the number of students and the list of names by field
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

/**
 * Creates an HTTP server.
 * - The root route ("/") responds with "Hello Holberton School!".
 * - The "/students" route responds with a list of students from the CSV file.
 */
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    // Root route: Respond with Hello message
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Students route: Get the database file path from the command line arguments
    const databaseFile = process.argv[2];

    // Call countStudents to get the student data
    countStudents(databaseFile)
      .then((studentData) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('This is the list of our students\n');
        res.end(studentData);
      })
      .catch((err) => {
        // If there's an error, respond with the error message
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(err.message);
      });
  } else {
    // Respond with 404 for any other routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

/**
 * Starts the server and listens on port 1245.
 */
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
