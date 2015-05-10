/**
function minus(A,B){
  return toNumber(A) - toNumber(B);
}

expect(minus).to.exist;
expect(minus("one", "zero")).to.equal(1);


function multiply(A,B){
  return toNumber(A) * toNumber(B);
}

expect(multiply).to.exist;
expect(multiply("one", "zero")).to.equal(0);


function divide(A,B){
  return toNumber(A) / toNumber(B);
}

expect(divide).to.exist;
expect(divide("zero", "zero")).to.equal(0);
