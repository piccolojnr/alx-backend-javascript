const request = require("request");
const { expect } = require("chai/index.js");

describe("Index page", () => {
  const API_URL = "http://localhost:7865";

  it("GET / returns correct response", (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome to the payment system");
      done();
    });
  });

  it("GET /cart/12 returns correct response", (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Payment methods for cart 12");
      done();
    });
  });

  it("GET /cart/hello returns 404", (done) => {
    request.get(`${API_URL}/cart/hello`, (_err, res) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});
