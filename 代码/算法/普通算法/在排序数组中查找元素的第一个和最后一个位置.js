/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    if(!nums.length) {
        return [-1,-1]
    }

    let left = 0;
    let right = nums.length - 1;
    let resIndex = -1;
    while(left <= right) {
        const middle = Math.floor((left + right) / 2);
        if(nums[middle] === target) {
            resIndex = middle
            break
        } else if(nums[middle] > target) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    console.log(resIndex)
    let resLeft = resIndex;
    let resRight = resIndex;
    if(resIndex !== -1) {
        while((nums[resLeft] === target) || (nums[resRight] === target)) {
            if(nums[resLeft - 1] === target) {
                resLeft--
            }
            if(nums[resRight + 1] === target) {
                resRight++
            }
            if(nums[resLeft - 1] !== target && nums[resRight + 1] !== target) {
                break;
            }
        }
    }
    return [resLeft, resRight]
};

console.log(searchRange([5,7,7,8,8,10], 8))
console.log(searchRange([5,7,7,8,8,10], 6))
console.log(searchRange([1], 1))