/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length === 0) {
        return [[]]
    }
    const res = subsets(nums.slice(0, nums.length - 1));
    const finalres = []
    for(let i = 0; i < res.length; i++) {
        finalres.push([...res[i], nums[nums.length - 1]]);
    }
    return finalres.concat(res);
};

console.log(subsets([0]))
console.log(subsets([1,2,3]))