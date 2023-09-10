// 构造二叉树
function createTree(arr) {
    const stack = [];
    const cur = arr.shift();
    stack.push(new TreeNode(cur));
    while(stack.length) {
        stack.push(new TreeNode(stack.shift()))
        stack.push(new TreeNode(stack.shift()))
        const pre = stack.shift();
        pre.left = stack[0]
        pre.right = stack[right]
    }
}
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// ------- 中序遍历--------
var inorderTraversal = function(root) {
    const stack = [];
    middleTrack(root, stack)
    return stack;
};

function middleTrack(root, stack) {
    if(!root) {
        return;
    }
    middleTrack(root.left, stack);
    stack.push(root.val)
    middleTrack(root.right, stack)
}
// ----------end-----------
// -----------不同的二叉搜索树--------------
// 二叉搜索树
// 1. 若根节点的左子树非空，则左子树上的所有节点关键字均小于根节点关键字
// 2. 若根节点的右子树非空，则右子树上的所有节点关键字均大于根节点关键字
// 3. 根节点的左、右子树本身又各是一颗二叉排序树
/**
 * @param {number} n
 * @return {number}
 */
const resMap = new Map();
var numTrees = function(n) {
    let res = 0;
    for(let i = 0; i < n; i++) {
        res += (getNum(i) * getNum(n - 1 - i))
    }
    return res;
};

function getNum(n) {
    if(n === 0 || n === 1) {
        return 1;
    }
    const mapres = resMap.get(n);
    if(mapres) {
        return mapres;
    }
    const finalRes = numTrees(n);
    resMap.set(n, finalRes)
    return finalRes;
}

console.log(numTrees(3))
console.log(numTrees(1))
// --------------end--------------
// --------------验证二叉搜索树------------
var isValidBST = function(root) {
    if(!root) {
        return true;
    }
    const val = root.val;
    if(root.left && root.right) {
        if(root.left.val < root.val && root.right.val > root.val && isValidBST(root.left) && isValidBST(root.right)) {
            return true;
        }
    }
    if(!root.left && root.right) {
        if(root.val < root.right.val && isValidBST(root.right)) {
            return true
        }
    }
    if(!root.right && root.left) {
        if(root.val > root.left.val && isValidBST(root.left)) {
            return true
        }
    }
    if(!root.left && !root.right) {
        return true;
    }
    return false;
};

// --------------end-------------------

// ------------从前序与中序遍历构造二叉树-------
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length && !inorder.length) {
        return null
    }
    const cur = preorder[0];
    const index = inorder.findIndex(item => item === cur);
    const left = inorder.slice(0, index);
    const right = inorder.slice(index + 1, inorder.length);
    return new TreeNode(cur, buildTree(preorder.slice(1, 1+left.length), left), buildTree(preorder.slice(1+left.length), right))
};

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))
// -----------------end----------------