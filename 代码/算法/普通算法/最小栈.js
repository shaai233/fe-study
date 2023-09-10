var MinStack = function() {
    this.stack = [];
    this.sortStack = [Infinity];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.sortStack.push(Math.min(this.sortStack[this.sortStack.length - 1], val))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const cur = this.stack.pop();
    this.sortStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.sortStack[this.sortStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());//   --> 返回 -3.
minStack.pop();
console.log(minStack.top());     // --> 返回 0.
console.log(minStack.getMin());   //--> 返回 -2.