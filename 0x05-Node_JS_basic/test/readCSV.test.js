const readCSV = require('../readCSV');

describe('cSV Reader', () => {
  it('should read and parse the CSV file correctly', async () => {
    expect.assertions(1);
    const filePath = './database.csv';
    const data = await readCSV(filePath);
    expect(data.length).toBeGreaterThan(0);
  });

  it('should throw an error if the file does not exist', async () => {
    expect.assertions(1);
    const invalidFilePath = './non_existent_file.csv';
    await expect(readCSV(invalidFilePath)).rejects.toMatchObject({
      code: 'ENOENT',
    });
  });
});
