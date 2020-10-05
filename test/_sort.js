const Sort = require("../src/Sort");
const { expect } = require("chai");
// const SomeKindOfSort = require("../src/Sort");

describe("Sort", () => {
  it("should be a class/function", () => {
    expect(Sort).to.be.a("function");
  });

  it("should have a mergeSort method", () => {
    expect(Sort.prototype.mergeSort).to.be.a("function");
  });

  it("should have a merge helper function", () => {
    expect(Sort.prototype.merge).to.be.a("function");
  });

  it("should merge two sorted arrays into one with the merge function", () => {
    let test = new Sort([3, 8, 5, 2]);
    let result = test.merge([2, 6], [3, 5]);
    expect(result).to.eql([2, 3, 5, 6]);
  });

  it("should sort an array in ascending order", () => {
    let test = new Sort([5, 8, 1, 3, 9, 2, 6, 4, 7]);
    console.log("testSort:", test, "this array:", test.array);
    let sortedArray = test.mergeSort(test.array);

    console.log("sorted: ", sortedArray);
    expect(sortedArray).to.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
