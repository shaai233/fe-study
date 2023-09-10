/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const resMap = new Map();
    for(let i = 0; i < strs.length; i++) {
        const cur = strs[i].split('');
        cur.sort();
        const curMap = resMap.get(cur.join(''));
        if(!curMap) {
            resMap.set(cur.join(''), [strs[i]])
        } else {
            curMap.push(strs[i])
        }
    }

    const res = []
    for(let [a, b] of resMap) {
        res.push(b)
    }
    return res;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))