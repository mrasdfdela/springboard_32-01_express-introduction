const {
  parseInput,
  findMean,
  findMedian,
  findMode
} = require("./app.helpers");

describe("test parseInput", function(){
  test("with correctly-formatted data", function () {
    let arrStr = "1,2,3";
    let req = { query: { nums: arrStr } };
    let arrNum = [1, 2, 3];
    expect(parseInput(req)).toEqual(arrNum);
  });

  test("with incorrectly-formatted data", function () {
    let arrStr = "1,2,three";
    let req = { query: { nums: arrStr } };
    expect(parseInput(req)).toEqual("three is not a valid number");
  });

  test("with incorrectly-formatted data", function () {
    let arrStr = "";
    let req = { query: { nums: arrStr } };
    expect(parseInput(req)).toEqual("Numbers are required");
  });
});

describe("test findMean", function(){
  test("with correctly-formatted data", function () {
    let arr = [1,3,5,7];
    expect(findMean(arr)).toEqual(4);
  });
});

describe("test findMedian", function(){
  test("with even-number of elements", function () {
    let arr = [1,3,5,7];
    expect(findMedian(arr)).toEqual(4);
  });

  test("with odd-number of elements", function () {
    let arr = [1, 3, 5, 7, 0];
    expect(findMedian(arr)).toEqual(3);
  });
});

describe("test findMode", function(){
  test("with no mode", function () {
    let arr = [1,3,5,7];
    expect(findMode(arr)).toEqual("No mode");
  });
  test("with one mode", function () {
    let arr = [1,3,5,7,3];
    expect(findMode(arr)).toEqual(["3"]);
  });
  test("bimodal", function () {
    let arr = [1,3,5,7,3,5];
    expect(findMode(arr)).toEqual(["3","5"]);
  });
});