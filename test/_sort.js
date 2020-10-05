const Sort = require("../src/Sort");
const { expect } = require("chai");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a mergeSort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should sort an array in ascending order", () => {
    let testArray = new Sort([5, 8, 1, 3, 9, 2, 6, 4, 7]);
    let sortedArray = testArray.mergeSort();
    expect(sortedArray).to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
