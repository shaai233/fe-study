/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const res = [];
    for(let i = 0; i < grid.length; i++) {
        res.push([])
    }

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(j === 0) {
                res[i][j] = (res[i - 1]?.[j] || 0)  + grid[i][j]
            }else if(i === 0) {
                res[i][j] = (res[i]?.[j-1] || 0) + grid[i][j]
            } else {
                res[i][j] = Math.min(res[i][j-1], res[i-1][j]) + grid[i][j]
            }
        }
    }

    return res[grid.length-1][grid[0].length - 1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
console.log(minPathSum([[1,2,3],[4,5,6]]))
