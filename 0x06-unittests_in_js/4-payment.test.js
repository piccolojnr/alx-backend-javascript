import sinon from "sinon";
import { expect } from "chai";
import Utils from "./utils.js";
import sendPaymentRequestToApi from "./4-payment.js";

describe("sendPaymentRequestToApi", function () {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
    consoleLogSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it("should call calculateNumber", function () {
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith("SUM", 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith("The total is: 10")).to.be.true;
  });
});
