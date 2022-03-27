/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
    return (str.match(/[aeiou]/gi)||[]).length;
  }
    //g flag for global, i flag for ignore case

  /*
  const chai = require("chai");
const assert = chai.assert;

describe("Case 1", function(){
    it ("should be defined", function(){
        assert.strictEqual(getCount("abracadabra"), 5)
    });
});

*/