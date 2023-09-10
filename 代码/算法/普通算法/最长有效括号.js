/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    const stack = []
    let max = 0;
    stack.push(-1)
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(i)
        } else {
                const last = stack.pop();
                if(stack.length === 0) {
                    stack.push(i)
                } else {
                    max = Math.max(max, i - stack[stack.length - 1])
                }
                // console.log(max, i-last+1)
        }
    }

    return max
};

console.log(longestValidParentheses('(()'))
console.log(longestValidParentheses(')()())'))
console.log(longestValidParentheses('(('))
console.log(longestValidParentheses(')('))
console.log(longestValidParentheses(")(())))(())())")) // (())))(())())  5/8  5/7  5/6  4/6  4/5
console.log(longestValidParentheses(")()())")) // (())))(())())  5/8  5/7  5/6  4/6  4/5
// ()()()