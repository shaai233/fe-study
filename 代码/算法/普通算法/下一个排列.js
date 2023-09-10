/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let flag = true;
    for(let j = nums.length - 2; j >=0; j--) {
        if(nums[j] >= Math.max(...nums.slice(j+1))) { // 有等于号，是为了兼容相等的情况，如果相等走到 else 里有问题TODO:；Math.max 参数为单个元素
            continue
        } else {
            flag = false
            // const x = nums.splice(j, 1);
            const index = findLastIndex(nums, nums[j]); // leetcode 不支持 findLastIndex？？
            const tmp = nums[index];
            nums[index] = nums[j];
            nums[j] = tmp;

            nums.splice(nums.length, 0, ...(nums.splice(j+1).sort((a,b) => a - b))); // concat 不影响 for 循环遍历？？
            break
        }
    }

    if(flag) {
        nums.sort((a,b) => a-b)
    }

    return nums;
};

function findLastIndex(nums, target) {
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] > target) {
            return i
        }
    }
    return -1;
}
console.log(nextPermutation([1,2,3]))
console.log(nextPermutation([3,2,1]))
console.log(nextPermutation([1,1,5]))
console.log(nextPermutation([2,3,1]))
console.log(nextPermutation([1,3,2]))
console.log(nextPermutation([1,1]))