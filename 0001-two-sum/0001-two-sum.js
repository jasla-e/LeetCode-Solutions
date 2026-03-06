/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
 let map = {}; // number -> index

  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];

    if (map[need] !== undefined) {
      return [map[need], i];
    }

    map[nums[i]] = i;
  }
  };