/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums.length) {
        return -1
    }

    if(nums.length === 1) {
        return nums[0] === target ? 0 : -1
    }
    
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        const middle = Math.floor((left + right) / 2);
        // console.log(left, right)
        if(nums[middle] === target) {
            return middle;
        }
        if(nums[left] < nums[middle]) { // 左侧有序
            if(nums[left] <= target && target <= nums[middle]) {
                right = middle;;
            } else {
                left = middle;
            }
        } else if(nums[left] > nums[middle]) {
            if(nums[middle] <= target && target <= nums[right]) {
                left = middle;
            } else {
                right = middle
            }
        } else {
            left = middle + 1
        }
    }
    // console.log(nums[left], left)
    return -1;
};


console.log(search([4,5,6,7,0,1,2], 0))
console.log(search([4,5,6,7,0,1,2], 3))
console.log(search([1], 1))
console.log(search([1, 3], 3))