// Problem 1
const findNumbers = (nums) => {
  const dataSet = new Set(nums);
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (!dataSet.has(i + 1)) {
      result.push(i + 1);
    }
  }

  return result;
};

// Problem 2
var sumElements = function (nums, target) {
  let dataMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (dataMap.has(target - nums[i])) {
      return [dataMap.get(target - nums[i]), i];
    } else {
      dataMap.set(nums[i], i);
    }
  }
  return [];
};

module.exports = {
  findNumbers,
  sumElements,
};
//module.exports = twoSum;
