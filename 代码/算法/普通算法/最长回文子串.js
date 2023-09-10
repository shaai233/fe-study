// 动态规划
function longestPalindrome1(s) {
    if(s.length === 1) {
        return s;
    }
    const dp = new Array(s.length)
    let max;

    for(let i = 0; i < s.length; i++) {
        dp[i] = [];
        dp[i][i] = true
        max=s.slice(i, i+1)
        // console.log(dp)
    }

    for(let l = 2; l <= s.length; l++) {
        for(let j = 0; j <s.length; j++) {
            if(j + l - 1 >= s.length) {
                continue
            }
            if(s[j] === s[j + l - 1]) {
                if(l <= 3) {
                    dp[j][j + l - 1] = true
                    max = s.slice(j, j+l)
                }else {
                    dp[j][j + l - 1] = dp[j+1][j+l-2]
                    if(dp[j][j+l-1] && l > max.length) {
                        max = s.slice(j, j+l)
                    }
                }
            }else {
                dp[j][j+l-1] = false
            }
        }
    }
    // console.log(dp[8][8], max)
    console.log(max)
}
// 中心扩展法
function longestPalindrome2(s) {
    let res = ''

    for(let i = 0; i < s.length; i++){
        const cur = s[i];
        
        let j = i;
        let len = 0
        while(true) {
            if(j - len - 1 >=0 && j + len < s.length && s[j - len - 1] === s[j + len]) {
                if(res.length < 2 *len + 2) {
                    res = s.slice(j - len -1, j + len + 1);
                }
                len++;
            } else {
                break
            }
        }
        j = i;
        len = 0
        while(true) {
            if(j -len >= 0 && j + len < s.length && s[j - len] === s[j + len]) {
                if(res.length < 2*len + 1) {
                    res = s.slice(j - len, j +len + 1)
                }
                len++
            }else {
                break
            }
        }
    }

    return res
}

console.log(longestPalindrome1("a"))