var expect = require("chai").expect;

function toNumber(word){
  if ( word === "zero" ){
    return 0;
  }

  if ( word === "one" ){
    return 1;
  }

  if ( word === "two" ){
    return 2;
  }

  if ( word === "three"){
    return 3;
  }


expect(toNumber("zero")).to.equal(0);
expect(toNumber("one")).to.equal(1);
expect(toNumber("two")).to.equal(2)
