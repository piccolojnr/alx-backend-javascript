import { expect } from "chai";
import calculateNumber from "./2-calcul_chai.js";

describe("calculateNumber", function () {
  it("SUM", () => {
    expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
    expect(calculateNumber("SUM", 1.5, 3.7)).to.equal(6);
    expect(calculateNumber("SUM", 2.6, 2.4)).to.equal(5);
    expect(calculateNumber("SUM", 1.5, 3.7)).to.equal(6);
  });

  it("SUBTRACT", () => {
    expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber("SUBTRACT", 1.5, 3.7)).to.equal(-2);
    expect(calculateNumber("SUBTRACT", 2.6, 2.4)).to.equal(1);
    expect(calculateNumber("SUBTRACT", 1.5, 3.7)).to.equal(-2);
  });

  it("DIVIDE", () => {
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber("DIVIDE", 1.5, 3.7)).to.equal(0.5);
    expect(calculateNumber("DIVIDE", 2.6, 2.4)).to.equal(1.5);
    expect(calculateNumber("DIVIDE", 1.5, 3.7)).to.equal(0.5);
  });

  it('should return "Error" when dividing by 0', function () {
    expect(calculateNumber("DIVIDE", 1.4, 0.4)).to.equal("Error");
    expect(calculateNumber("DIVIDE", 4.5, 0.4)).to.equal("Error");
    expect(calculateNumber("DIVIDE", 1.5, 0)).to.equal("Error");
  });
});
