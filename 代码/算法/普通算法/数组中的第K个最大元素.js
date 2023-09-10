/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-08-25 09:10:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-08-28 09:21:46
 * @FilePath: \fe-note\docs\算法\数组中的第K个最大元素.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const stack = [];
    for(let i = 0; i < nums.length; i++) {
        if(stack.length < k) {
            const index = stack.findIndex((item => item > nums[i]));
            if(index !== -1) {
                stack.splice(index, 0, nums[i])
            } else {
                stack.push(nums[i])
            }
        } else if(nums[i] > stack[0]) {
            const index = stack.findIndex((item => item > nums[i]));
            stack.shift();
            if(index !== -1) {
                stack.splice(index-1, 0, nums[i])
            } else {
                stack.push(nums[i])
            }
        }
    }
    return stack[0]
};

console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))
console.log(findKthLargest([-1,2,0], 3))
console.log(findKthLargest([-1,2,0], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5  ,6,2,4,7,8,5,6], 20))
// [1,1,1,1,2, 2,2,3,3,3,4,5,5,5,6,6,7,7,8,10,11]

