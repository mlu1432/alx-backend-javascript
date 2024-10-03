/**
 * Function to read and parse a CSV file
 * @param {string} filePath - Path to the CSV file
 * @returns {Promise} - A Promise that resolves to an array of objects (parsed CSV data)
 */

const fs = require('fs');
const csv = require('csv-parser');

function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

module.exports = readCSV;
