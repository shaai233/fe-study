/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i = i+2) {
        // console.log(i)
        if(nums[i] !== nums[i+1]) {
            return nums[i]
        }
    }
};

// console.log(singleNumber([2,2,1]))
// console.log(singleNumber([4,1,2,1,2]))
// console.log(singleNumber([1]))