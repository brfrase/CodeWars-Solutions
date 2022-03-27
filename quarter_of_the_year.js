const quarterOf = month => {
    if (month <= 3) {
      return 1;
    } else if (month > 3 && month <= 6) {
      return 2;
    } else if (month > 6 && month <= 9) {
      return 3;
    } else if (month > 9 && month <= 12) {
      return 4;
    } else {
      return 'Invalid Month';
    }
  };


  //Test 

/*

  const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic Tests", () =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(quarterOf(3), 1)
    assert.strictEqual(quarterOf(8), 3)
    assert.strictEqual(quarterOf(11), 4)
  });
});

*/
