var expect = require('chai').expect;

function toWord(number) {
    if (number === 0) {
        return "zero";
    }
    if (number === 1) {
        return "one";
    }
    if (number === 2) {
        return "two";
    }
    if (number === 3) {
        return "three";
    }
    if (number === 4) {
        return "four";
    }
    if (number === 5) {
        return "five";
    }
    if (number === 6) {
        return "six";
    }
    if (number === 7) {
        return "seven";
    }
    if (number === 8) {
        return "eight";
    }
    if (number === 9) {
        return "nine";
    }
    if (number === 10) {
        return "ten";
    }
    if (number === 11) {
        return "eleven";
    }
    if (number === 12) {
        return "twelve";
    }
    if (number === 13) {
        return "thirteen";
    }
    if (number === 14) {
        return "fourteen";
    }
    if (number === 15) {
        return "fifteen";
    }
    if (number === 16) {
        return "sixteen";
    }
    if (number === 17) {
        return "seventeen";
    }
}

// Test cases here...
expect(toWord).to.exist;
expect(toWord(0)).to.equal("zero");
expect(toWord(1)).to.equal("one");
expect(toWord(2)).to.equal("two");
expect(toWord(3)).to.equal("three");
expect(toWord(4)).to.equal("four");
expect(toWord(5)).to.equal("five");
expect(toWord(6)).to.equal("six");
expect(toWord(7)).to.equal("seven");
expect(toWord(8)).to.equal("eight");
expect(toWord(9)).to.equal("nine");
expect(toWord(10)).to.equal("ten");
expect(toWord(11)).to.equal("eleven");
expect(toWord(12)).to.equal("twelve");
expect(toWord(13)).to.equal("thirteen");
expect(toWord(14)).to.equal("fourteen");
expect(toWord(15)).to.equal("fifteen");
expect(toWord(16)).to.equal("sixteen");
expect(toWord(17)).to.equal("seventeen");




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