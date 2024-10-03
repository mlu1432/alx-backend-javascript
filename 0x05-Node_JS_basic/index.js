const readCSV = require('./readCSV');

// Example usage of readCSV function
readCSV('./database.csv')
  .then(() => console.log('File processed successfully'))
  .catch((err) => console.error('Error processing file:', err));
