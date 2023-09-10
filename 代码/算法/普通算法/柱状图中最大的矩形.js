/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // if(heights.length === 1) {
    //     return heights[0]
    // }
    let left = 0;
    let right = heights.length - 1;
    let max = 0;

    while(left <= right) {
        // console.log(left, right)
        const cur = (right - left + 1) * Math.min(...heights.slice(left, right+1))
        if(cur > max) {
            max = cur
        }
        // let leftNext = left + 1;
        // let rightNext = right - 1;
        if(heights[left]<heights[right]) {
            left++
        } else {
            right--;
        }
    }

    return max;
};

console.log(largestRectangleArea([2,1,5,6,2,3]))
console.log(largestRectangleArea([2,4]))
console.log(largestRectangleArea([1]))
console.log(largestRectangleArea([0, 9]))
console.log(largestRectangleArea([4,2,0,3,2,4,3,4]))