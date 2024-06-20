const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
  it("should return the sum of rounded numbers", function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(2.6, 2.4), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  assert.strictEqual(calculateNumber(-1.4, -4.5), -5);
  assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  assert.strictEqual(calculateNumber(-2.6, -2.4), -5);
  assert.strictEqual(calculateNumber(1.5, -3.7), -2);
  assert.strictEqual(calculateNumber(-1.5, 3.7), 3);

  it("should return the sum of rounded numbers", function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(2.6, 2.4), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should handle edge cases properly", function () {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    assert.strictEqual(calculateNumber(-1.4, -4.5), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
    assert.strictEqual(calculateNumber(-2.6, -2.4), -5);
    assert.strictEqual(calculateNumber(1.5, -3.7), -2);
    assert.strictEqual(calculateNumber(-1.5, 3.7), 3);
  });

  it("should return the sum of rounded numbers", function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    assert.strictEqual(calculateNumber(2.6, 2.4), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it("should handle edge cases properly", function () {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
    assert.strictEqual(calculateNumber(-1.4, -4.5), -5);
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
    assert.strictEqual(calculateNumber(-2.6, -2.4), -5);
    assert.strictEqual(calculateNumber(1.5, -3.7), -2);
    assert.strictEqual(calculateNumber(-1.5, 3.7), 3);
  });
});
