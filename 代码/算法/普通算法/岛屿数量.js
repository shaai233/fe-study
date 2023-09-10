/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let max = 0;
    for(let i = 0; i < grid.length; i++) {
        for(j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === '1') {
                // console.log(i, j)
                max++;
                dfs(grid,i,j)
            }
        }
    }
    return max
   function dfs(grid, i, j) {
    grid[i][j] = '0';
    if(i !== 0) {
        if(grid[i-1][j] === '1') {
            dfs(grid, i-1,j)
        }
    }
    if(i !== grid.length - 1) {
        if(grid[i+1][j] === '1') {
            dfs(grid, i+1, j)
        }
    }
    if(j !== 0) {
        if(grid[i][j-1] === '1') {
            dfs(grid, i, j-1)
        }
    }
    if(j !== grid[0].length - 1) {
        if(grid[i][j+1] === '1') {
            dfs(grid, i, j+1)
        }
    }
   }
};
const case1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
]

const case2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
]

const case3 = [["1","1","1"],["0","1","0"],["1","1","1"]]
console.log(numIslands(case1), '1')
console.log(numIslands(case2), '3')
console.log(numIslands(case3), '1')