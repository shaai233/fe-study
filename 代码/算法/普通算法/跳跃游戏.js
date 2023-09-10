/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    let index = 0;
    while(max < nums.length) {
        if(nums[index] === 0 && max === index) {
            break;
        }
        max = Math.max(max, index + nums[index])
        index++;
    }
    return max >= (nums.length - 1);
};

console.log(canJump([2,3,1,1,4]))
console.log(canJump( [3,2,1,0,4]))
console.log(canJump( [0,1]))
console.log(canJump([3,0,8,2,0,0,1]))