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

  if ( word === "three" ){
    return 3;
  }

  if ( word === "four" ){
    return 4;
  }

  if ( word === "five" ){
    return 5;
  }

  if ( word === "six" ){
    return 6;
  }

  if ( word === "seven" ){
    return 7;
  }

  if ( word === "eight" ){
    return 8;
  }

  if ( word === "nine" ){
    return 9;
  }

}

  expect(toNumber("zero")).to.equal(0);
  expect(toNumber("one")).to.equal(1);
  expect(toNumber("two")).to.equal(2);
  expect(toNumer("three")).to.equal(3);
  expect(toNumer("four")).to.equal(4);
  expect(toNumber("five")).to.equal(5);
  expect(toNumber("six")).to.equal(6);
  expect(toNumer("seven")).to.equal(7);
  expect(toNumer("eight")).to.equal(8);
  expect(toNumber("nine")).to.equal(9);





  function plus(A, B){
  if ( A === "zero", B === "zero" ){
    return 0 + 0;
  }

  if ( A === "zero", B === "one" ){
    return 0 + 1;
  }

  if ( A === "zero", B === "two" ){
    return 0 + 2;
  }

  if ( A === "zero", B === "three" ){
    return 0 + 3;
  }

  if ( A === "zero", B === "four" ){
    return 0 + 4;
  }

  if ( A === "zero", B === "five" ){
    return 0 + 5;
  }

  if ( A === "zero", B === "six" ){
    return 0 + 6;
  }

  if ( A === "zero", B === "seven"){
    return 0 + 7;
  }

  if ( A === "zero", B === "eight"){
    return 0 +8;
  }

  if ( A === )
}

expect(plus).to.exist;
expect(plus("zero", "zero")).to.equal(0);
expect(plus("zero", "one")).to.equal(1);
expect(plus("zero", "two")).to.equal(2);
expect(plus("zero", "three")).to.equal(3);
expect(plus("zero", "four")).to.equal(4);
