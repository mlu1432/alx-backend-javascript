// test/0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('../0-calcul');

describe('calculateNumber', function () {
  
  describe('Basic addition', function () {
    it('should return 4 when inputs are (1, 3)', function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are (1.2, 3.7)', function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should return 5 when inputs are (1.5, 3.2)', function () {
      assert.strictEqual(calculateNumber(1.5, 3.2), 5);
    });

    it('should return 0 when inputs are (0.4, 0.4)', function () {
      assert.strictEqual(calculateNumber(0.4, 0.4), 0);
    });
  });

  describe('Edge cases', function () {
    it('should return 1 when inputs are (0.5, 0.4)', function () {
      assert.strictEqual(calculateNumber(0.5, 0.4), 1);
    });

    it('should return 0 when inputs are (-0.4, 0.4)', function () {
      assert.strictEqual(calculateNumber(-0.4, 0.4), 0);
    });

    it('should return -2 when inputs are (-1.2, -0.7)', function () {
      assert.strictEqual(calculateNumber(-1.2, -0.7), -2);
    });
  });

});

