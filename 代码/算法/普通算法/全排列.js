/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 1) {
        return [nums]
    }
    const res = [];
    for(let i = 0; i < nums.length; i++){
        const resTmp = permute([...nums.slice(0, i), ...nums.slice(i+1)])
        for(let j = 0; j < resTmp.length; j++) {
            res.push([nums[i], ...resTmp[j]])
        }
    }
    return res;
};

console.log(permute([1,2,3]))
console.log(permute([0, 1]))
console.log(permute([1]))

// [0,0] ->  [n, 0]
// [0, n] -> [0, 0]
// [n, 0] => [n, n]
// [n, n] => [n, 0]