/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // 拓扑排序，需要求出每个课程的入度，以及每个课程前置的课程
    // 求每个课程的入度用数组存储，求前置课程用 map或数组存储
    const rudu = new Array(numCourses).fill(0)
    const qianzhi = new Array(numCourses)


    for(let i = 0; i < prerequisites.length; i++) {
        for(let j = 0; j < prerequisites[i].length; j++) {
            if(!qianzhi[prerequisites[i][j]]) {
                qianzhi[prerequisites[i][j]] = []
            }
            if(j > 0) {
                rudu[prerequisites[i][j-1]]++;
                if(!qianzhi[prerequisites[i][j-1]].includes(prerequisites[i][j])) {
                    qianzhi[prerequisites[i][j-1]].push(prerequisites[i][j])
                }
            }
        }
    }
    // 将入度为0的节点入栈
    const stack = []
    for(let i = 0; i < rudu.length; i++) {
        if(rudu[i] === 0) {
            stack.push(i)
        }
    }

    let max = 0;
    while(stack.length) {
        const cur = stack.shift();
        max++;
        for(let i = 0; i < qianzhi.length; i++) {
            const qz = qianzhi[i];
            if(qz?.includes(cur)) {
                const index = qz.findIndex(item => item === cur);
                qz.splice(index, 1)
                rudu[i]--;
                if(rudu[i] === 0 ){
                    stack.push(i)
                }
            }
        }
    }

    return max === numCourses
};

console.log(canFinish(2, [[1,0]]))
console.log(canFinish(2, [[1,0], [0,1]]))