
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }
    const store = [];
    for(let i = 0; i < numRows; i++) {
        store[i] = []
    }
    let index = 0;
    let isAdd = true;
    for(let i = 0; i < s.length; i++) {
        store[index].push(s[i])
        if(isAdd && index < numRows - 1) {
            index++
        } else if(!isAdd && index === 0) {
            index++
            isAdd = true;
        } else if(isAdd && index === numRows - 1) {
            index--
            isAdd = false
        } else if(!isAdd && index > 0) {
            index--;
        }
    }
    let res = '';
    for(let i = 0; i < store.length; i++) {
        res += store[i].join('')
    }
    return res;
};

console.log(convert('A', 1))