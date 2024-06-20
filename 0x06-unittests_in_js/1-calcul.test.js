const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", function () {
  it("SUM", () => {
    assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber("SUM", 1.5, 3.7), 6);
    assert.strictEqual(calculateNumber("SUM", 2.6, 2.4), 5);
    assert.strictEqual(calculateNumber("SUM", 1.5, 3.7), 6);
  });

  it("SUBTRACT", () => {
    assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber("SUBTRACT", 1.5, 3.7), -2);
    assert.strictEqual(calculateNumber("SUBTRACT", 2.6, 2.4), 1);
    assert.strictEqual(calculateNumber("SUBTRACT", 1.5, 3.7), -2);
  });

  it("DIVIDE", () => {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber("DIVIDE", 1.5, 3.7), 0.5);
    assert.strictEqual(calculateNumber("DIVIDE", 2.6, 2.4), 1.5);
    assert.strictEqual(calculateNumber("DIVIDE", 1.5, 3.7), 0.5);
  });

  it('should return "Error" when dividing by 0', function () {
    assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0.4), "Error");
    assert.strictEqual(calculateNumber("DIVIDE", 4.5, 0.4), "Error");
    assert.strictEqual(calculateNumber("DIVIDE", 1.5, 0), "Error");
  });
});
