/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min=Math.min(...nums);
    let max=Math.max(...nums);

    while(max!==0){ 
     let com=max;
     max=min%max
     min=com
    }
    return min

};