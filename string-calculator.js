var expect = require("chai").expect;

function toNumber(word){
  if ( word === "zero" ){
    return 0;
  }

  expect(toNumber("zero")).to.equal(0);
