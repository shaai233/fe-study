/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {


    for(let i = 0; i < Math.floor(matrix.length / 2); i++) {
        let start = i;
        let end = matrix.length - i - 1;
        for(let j = start; j < end; j++) {
            let tmp = matrix[i][j];
            matrix[i][j] = matrix[matrix.length - 1 - j][i];
            matrix[matrix.length - 1 - j][i] = matrix[matrix.length - 1 - i][matrix.length - 1 - j];
            matrix[matrix.length - 1 - i][matrix.length - 1 - j] = matrix[j][matrix.length - 1 - i];
            matrix[j][matrix.length - 1 - i] = tmp;
        }
    }

    return matrix

};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))
console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]))