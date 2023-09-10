/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    for(let i = 0; i <= nums.length-1; i++) {
        if(nums[i] === 0) {
            const tmp = nums[i]
            nums[i] = nums[left]
            nums[left] = tmp;
            left++;
        }
        if(nums[i] === 2) {
            const tmp = nums[i]
            nums[i] = nums[right]
            nums[right] = tmp;
            right--;
        }
    }
    return nums
};


function quick(nums, left, right) {
    if(left >= right) {
        return;
    }
    const i = fast(nums, left, right);
    quick(nums, left, i-1);
    quick(nums, i+1, right);
}

function fast(nums, left, right) {
    let L = left;
    let R = right;
    let main = nums[left];

    while(L < R) {
        while(L < R && nums[R] >= main) {
            R--;
        }
        while(L < R && nums[L] <= main) {
            L++
        }
        const test = nums[R];
        nums[R] = nums[L]
        nums[L] = test;
    }

    nums[left] = nums[L];
    nums[L]= main;

    return L
}

console.log(sortColors([2,0,2,1,1,0]))
console.log(sortColors([2,0,1]))
console.log(sortColors([1,2,0]))