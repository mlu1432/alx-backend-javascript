// index.js
const readCSV = require('./readCSV');
const filePath = './database.csv';

// Calling the readCSV function to parse the CSV file
readCSV(filePath)
  .then((data) => {
    console.log('Parsed CSV Data:', data);
  })
  .catch((error) => {
    console.error('Error reading CSV:', error);
  });
