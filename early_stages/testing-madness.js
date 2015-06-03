var expect = require("chai").expect;

function toNumber(word) {
  if (word === "zero") {
    return 0;
  }

  if (word === "one") {
    return 1;
  }

  if (word === "two") {
    return 2;
  }

  if (word === "three") {
    return 3;
  }

  if (word === "four") {
    return 4;
  }

  if (word === "five") {
    return 5;
  }

  if (word === "six") {
    return 6;
  }

  if (word === "seven") {
    return 7;
  }

  if (word === "eight") {
    return 8;
  }

  if (word === "nine") {
    return 9;
  }

}

function divide(A, B) {
  return toNumber(A) / toNumber(B);
}

expect(divide).to.exist;
expect(divide("zero", "zero")).to.equal(NaN);




// function toNumbers(A,B){
//   return A + B;
// }
//
// toNumbers(0, 1);
//
// console.log(toNumbers("0", "1"));
//
//
// function toNumbers(A,B){
//   return A - B;
// }
//
// toNumbers(1, 1);
//
// console.log(toNumbers("1", "1"));
//
// function toNumbers(A,B){
//   return A * B;
// }
//
// toNumbers(1, 1);
//
// console.log(toNumbers("1", "1"));

//Option 1:

function notZero(n) {
  n = +n;  // Coerce to number.
  if (!n) {  // Matches +0, -0, NaN
    throw new Error('Invalid dividend ' + n);
  }
  return n;
}

//Option 2:

function dividend(A, B) {
  var dividend = numerator / denominator;
  if (dividend !== dividend) { throw new Error(numerator + " / " + denominator); }
  return dividend;
}
