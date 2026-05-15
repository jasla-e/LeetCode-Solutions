/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    
    let set = new Set();
    let duplicate = 0;
    let missing = 0;

    for (let num of nums) {

        if (set.has(num)) {
            duplicate = num;
        }

        set.add(num);
    }

    for (let i = 1; i <= nums.length; i++) {

        if (!set.has(i)) {
            missing = i;
        }
    }

    return [duplicate, missing];
};