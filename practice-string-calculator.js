var expect = require("chai").expect;

// function toNumbers( A + B ){
//   return  0 + 0;
// }
//
// expect(toNumbers).to.exist;
// expect(toNumbers("A", "B")).to.equal(0);


function divide(A, B) {
  if (B === "zero"){
    return Infinity;
  }
  if (A === "one"){
    if (B === "zero"){
      return Infinity;
  }

  return 1;

  }

  return 0; 




  /*function toNumber( A + B ){
    return 0 + 1;
  }

  expect(plus).to.exist;
  expect(toNumber(0 + 1)).to.equal(1)*/
