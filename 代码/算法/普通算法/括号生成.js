/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if(n === 1) {
        return ['()']
    }
    const res = []
    generateParenthesis(n-1).forEach(item => {
        const cur = item.split('');
        for(let i = 0; i <= cur.length; i++) {
            const c = [...cur];
            c.splice(i, 0, '(')
            for(let j = i + 1; j <= c.length; j++) {
                const r = [...c]
                r.splice(j, 0 , ')')
                res.push(r.join(''))
            }
        }
    })

    return [...new Set(res)];
};

var generateParenthesis1 = function(n) {
    if(n === 0) {
        return ['']
    }
    if(n === 1) {
        return ['()']
    }
    const res = [];
    for(let i = 0; i < n; i++) {
        const left = generateParenthesis1(i);
        const right = generateParenthesis1(n-1-i)
        left.forEach(item => {
            right.forEach(rightItem => {
                res.push('('+item+')'+rightItem)
            })
        })
    }

    return res;
};

// console.log(generateParenthesis(1))
console.log(generateParenthesis1(2)) // ()() (())
console.log(generateParenthesis1(3)) // ()()  (())()  (()())  (()()