/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const trimNums = [];
    nums.forEach(item => {
        if(!trimNums.includes(item)) {
            trimNums.push(item)
        }
    })
    const res = [];
    for(let i = 0; i < trimNums.length - 1; i++) {
        const twoRes = getSumTwo(trimNums.slice(i+1), 0 - trimNums[i]);
        if(twoRes.length) {
            twoRes.forEach(item => {
                res.push([trimNums[i], ...item])
            })
        }
    }
    // console.log(res);
    return res;
};

function getSumTwo(arr, target) {
    const tmpMap = new Map();
    const res = [];

    for(let i = 0; i < arr.length; i++) {
        const tmp1 = tmpMap.get(target - arr[i]);
        if(tmp1 !== undefined) {
            res.push([arr[i], arr[tmp1]])
        } else {
            tmpMap.set(arr[i], i)
        }
    }

    return res;
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0, 1, 1]))
console.log(threeSum([0, 0, 0]))
console.log(threeSum([0, 0, 0]))