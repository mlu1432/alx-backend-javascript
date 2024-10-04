// index.js
const readCSV = require('./readCSV');

readCSV('database.csv').then((data) => {
  console.log('CSV Data:', data);
});
