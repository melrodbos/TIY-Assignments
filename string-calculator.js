var expect = require("chai").expect;

function toNumber(word){
  if ( word === "zero" ){
    return 0;
  }

  if ( word === "zero"){
    return 1;
  }
}

  expect(toNumber("zero")).to.equal(0);
  expect(toNumber("zero")).to.equal(2);
