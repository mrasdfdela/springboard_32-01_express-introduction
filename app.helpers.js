// Functions for parsing & validating query string inputs
function parseInput(req) {
  let nums = req.query.nums.split(",");
  console.log(nums);
  if ( nums[0] === '') {
    return "Numbers are required";
  } else if (nums.some((num) => isNaN(num))) {
    const words = nums.filter((num) => isNaN(num));
    return genErrMsg(words);
  } else if (nums.every((el) => !isNaN(el))) {
    return nums.map((num) => parseInt(num));
  }
}

function genErrMsg(arr) {
  if (arr.length === 1) {
    return `${arr[0]} is not a valid number`;
  } else {
    return `${arr.join(", ")} are not valid numbers`;
  }
}

// Function for calculating the mean
function findMean(arr) {
  total = arr.reduce((acc = 0, num) => acc + num);
  return total / arr.length;
}

// Function for calculating the median
function findMedian(arr) {
  arr = arr.sort();
  if (arr.length % 2 === 0) {
    mid = arr.length / 2;
    elOne = arr[mid - 1];
    elTwo = arr[mid];
    return (elOne + elTwo) / 2;
  } else {
    return arr[Math.floor(arr.length / 2)];
  }
}

// Functions for calculating the mode
function findMode(arr) {
  let maxFreq, numCount;
  [maxFreq, numCount] = numFreq(arr);

  let modeArr = [];
  for (let key in numCount) {
    if (numCount[key] === maxFreq) {
      modeArr.push(key);
    }
  }

  return modeArr.length === arr.length ? "No mode" : modeArr;
}

function numFreq(arr) {
  let maxFreq = 0;
  let numCount = {};

  arr.forEach((num) => {
    numCount[num] = numCount[num] ? numCount[num] + 1 : 1;
    if (numCount[num] > maxFreq) {
      maxFreq = numCount[num];
    }
  });

  return [maxFreq, numCount];
}

module.exports = { parseInput, genErrMsg, findMean, findMedian, findMode, numFreq };
