/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */


var exist = function(board, word) {
    const visited = []
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === word[0]) {
                visited.length = 0;
                for(let i = 0; i < board.length;i++) {
                    visited.push(new Array(board[0].length).fill(false));
                }
                // console.log(i, j)
                if(find(i, j, 0, word, board, visited)) {
                    return true;
                }
            }
        }
    }
    return false;
};

function find(i, j, index, word, board,visited) {
    let finalIndex = index;
    if(finalIndex > word.length - 1) {
        return true;
    }
    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || visited[i][j]) {
        return false;
    }
    // console.log(i, j, board[i][j], word[finalIndex])
    if(board[i][j] === word[finalIndex]) {
        visited[i][j] = true;
        // console.log(visited)
        finalIndex++;
        const res = find(i, j-1, finalIndex, word, board, visited) || find(i, j+1, finalIndex, word, board, visited) || find(i+1, j, finalIndex, word, board, visited) || find(i-1, j, finalIndex, word, board, visited)
        if(!res) {
            visited[i][j] = false
        }
        return res;
    }
    return false;
}

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED'))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE'))
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB'))
console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]], 'AAB'))
// ABCE
// SFES
// ADEE
console.log(exist([["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]], "ABCESEEEFS"))
