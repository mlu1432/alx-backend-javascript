// server
const express = require('express');
const readCSV = require('./readCSV');

const app = express();

// Use the readCSV function
readCSV('database.csv').then((data) => {
  app.get('/data', (req, res) => {
    res.json(data);
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
