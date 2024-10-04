// 5-http.js
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

/**
 * Root route for handling the homepage.
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Route for "/students" to list students.
 */
app.get('/students', (req, res) => {
  const database = process.argv[2] || 'database.csv';

  countStudents(database)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((err) => {
      res.send(`Error: ${err.message}`);
    });
});

/**
 * Exporting the Express app for use in the server.
 */
module.exports = app;

