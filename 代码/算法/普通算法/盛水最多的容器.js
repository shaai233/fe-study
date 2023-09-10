/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    while(left < right) {
        const min = Math.min(height[left], height[right]);
        const result = min * (right - left);
        if(res < result) {
            res = result
        }
        if(height[left] < height[right]) {
            left++
        } else {
            right--
        }
        // if(height[left] < height[left + 1]) {
        //     left++
        // } else if(height[right] < height[right - 1]) {
        //     right--;
        // } else {
        //     left++
        // }
    }
    return res;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1, 1]))
console.log(maxArea([1,2,1]))
console.log(maxArea([1,3,2,5,25,24,5]))