// test/1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('../1-calcul');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when type is SUM and inputs are (1.4, 4.5)', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when type is SUBTRACT and inputs are (1.4, 4.5)', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when type is DIVIDE and inputs are (1.4, 4.5)', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when type is DIVIDE and the second number rounds to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
