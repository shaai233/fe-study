/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const res = new Array(s.length).fill(false);
    for(let i = 0; i < s.length; i++) {
        for(let j = i; j < s.length; j++) {
            if(res[i] && wordDict.includes(s.slice(i+1, j+1)) || (i===0) && wordDict.includes(s.slice(i, j+1))) {
                res[j] = true;
            }
        }
    }
    return res[res.length - 1]
};

console.log(wordBreak('leetcode', ['leet', 'code']))
console.log(wordBreak('applepenapple', ["apple", "pen"]))
console.log(wordBreak('catsandog', ["cats", "dog", "sand", "and", "cat"]))