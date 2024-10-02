// test/sample.test.js
const readCSV = require('../readCSV');
const path = require('path');
const filePath = path.resolve(__dirname, '../database.csv');


// Jest test to check if CSV parsing work correctly
test('CSV file should be parsed correctly', async () => {
	const data = await readCSV(filePath);
	expect(Array.isArray(data)).tobe(true);
	expect(data.length).toBeGreaterThan(0);
	expect(data[0]).toHaveProperty('firstname');
});
