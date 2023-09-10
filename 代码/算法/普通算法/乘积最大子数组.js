/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max;
    let res = []
    for(let i = 0; i < nums.length; i++) {
        if(i === 0) {
            res[i] = nums[i]
            max = res[i]
        } else {
            let cur = nums[i];
            let curMax = nums[i];
            res[i] = curMax;
            for(let j = i-1; j >=0; j--) {
                cur *= nums[j];
                if(cur > curMax) {
                    curMax = cur;
                    res[i] = curMax;
                }
            }
        }
    }
    return Math.max(...res)
};

console.log(maxProduct([2,3,-2,4]))
console.log(maxProduct([-2,0,-1]))
console.log(maxProduct([-1,-2,-3]))
console.log(maxProduct([-2,3,-4]))
console.log(maxProduct([2,-5,-2,-4,3]))