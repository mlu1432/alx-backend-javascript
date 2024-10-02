// testCSV.js
const readCSV = require('../readCSV');
const filePath = '../database.csv';

// Call the function to read and parse the CSV file
readCSV(filePath)
  .then((data) => {
    console.log('Parsed CSV Data:', data);
  })
  .catch((error) => {
    console.error('Error reading CSV:', error);
  });
