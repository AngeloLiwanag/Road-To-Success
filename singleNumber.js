/**
 * @param {number[]} nums
 * @return {number}
 */

//EXAMPLE
// Input: [2,2,1]
// Output: 1
var singleNumber = function(nums) {
    nums.sort();
    for(var i = nums.length - 1; i > 0; i--){
        if (nums[i] === nums[i-1]) {
            nums.splice(i-1, 2);
            i--;
        }
    }
    return nums;
};