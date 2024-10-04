const express = require('express');

// Create an instance of Express
const app = express();

/**
 * Route handler for the root ("/") endpoint
 * Responds with 'Hello Holberton School!'
 */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

/**
 * Catch-all route handler for undefined routes
 * Responds with a 404 error message
 */
app.use((req, res) => {
  res.status(404).send('Cannot GET ' + req.url);
});

// Start the server and listen on port 1245
app.listen(1245, () => {
  console.log('Express server running on port 1245');
});

module.exports = app;
