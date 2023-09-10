/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0]
    })
    let res = []
    for(let i = 0; i < intervals.length; i++) {
        if(i === 0) {
            res.push(intervals[i])
            continue
        }
        const last = res.pop();
        if(last[1] >= intervals[i][0]) {
            res.push([Math.min(last[0], intervals[i][0]), Math.max(last[1], intervals[i][1])])
        } else {
            res.push(last)
            res.push(intervals[i])
        }
    }
    return res;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,4],[0,0]]))
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))