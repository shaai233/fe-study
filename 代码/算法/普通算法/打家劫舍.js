/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // if(nums.length === 0) {
    //     return 0;
    // }
    // if(nums.length === 1) {
    //     return nums[0]
    // }
    // if(nums.length === 2) {
    //     return Math.max(...nums)
    // };
    // if(nums.length > 2) {
    //     return Math.max(nums[0] + rob(nums.slice(2)), nums[1] +rob(nums.slice(3)))
    // }
    const res = [];
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            res[i] = nums[i]
        }else if(i === 1) {
            res[i] = Math.max(nums[i], nums[i-1])
        }else {
            res[i] = Math.max(nums[i] + (res[i-2] ?? 0), res[i-1])
        }
    }
    return res[res.length-1]
};

console.log(rob([1,2,3,1]))
console.log(rob([2,7,9,3,1]))