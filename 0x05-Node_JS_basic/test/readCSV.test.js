/**
 * Tests for readCSV function
 */

const readCSV = require('../readCSV');

describe('cSV Reader', () => {
  it('should read and parse the CSV file correctly', async () => {
    expect.assertions(1);
    const csvFilePath = './database.csv';
    const data = await readCSV(csvFilePath);
    expect(data).toStrictEqual(expect.any(Array));
  });

  it('should throw an error if the file does not exist', async () => {
    expect.assertions(1);
    const invalidFilePath = './non_existent_file.csv';
    // Updated the way the exception is handled
    await expect(readCSV(invalidFilePath)).rejects.toThrow();
  });
});
