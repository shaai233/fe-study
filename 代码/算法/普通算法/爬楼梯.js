/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n <= 2) {
        return n;
    }
    let res = [1, 2]
    for(let i = 2; i < n; i++) {
        res = [res[1], res[0] + res[1]]
    }
    return res[1]
};

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))