var assert = require('chai').assert;
var luhnAlgorithm = require("./luhnAlgorithm");

describe("Luhn's Algorithm", function() {
  it("should return true if value is validated by Luhn Algorithm", function () {
    var idNum = 79927398713;
    var result = luhnAlgorithm(idNum);
    assert.isTrue(result);
  });

  it("should return true if value is not validated by Luhn Algorithm", function () {
    var idNum = 79927398712;
    var result = luhnAlgorithm(idNum);
    assert.isFalse(result);
  });
});