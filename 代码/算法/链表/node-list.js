function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

ListNode.prototype.print = function() {
    const res = [];
    let cur = this;
    while(cur !== null) {
        res.push(cur.val)
        cur = cur.next
    }
    return res;
}

// 根据数组创建 node-list
function createNodeList(arr, i = 0) {
    if(i === arr.length) {
        return null
    }
    return new ListNode(arr[i], createNodeList(arr, ++i))
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let curList1 = list1;
    let curList2 = list2;
    let cur;
    let head

    while(curList1 && curList2) {
        const curNode = curList1.val < curList2.val ? curList1 : curList2;
        if(!cur) {
            cur = curNode
        } else {
            cur.next = curNode;
            cur = curNode
        }
        if(!head) {
            head = curNode
        }
        if(curNode === curList1) {
            curList1 = curList1.next
        } else {
            curList2 = curList2.next
        }
    }
    if(curList1) {
        if(!head) {
            head = curList1
        }
        if(!cur) {
            cur = curList1
        } else {
            cur.next = curList1
        }
    } else if(curList2) {
        if(!head) {
            head = curList2
        }
        if(!cur) {
            cur = curList2
        } else {
            cur.next = curList2
        }
    }

    return head || null;
};

// 合并多个链表
var mergeKLists = function(lists) {
    if(lists.length === 0) {
        return null
    }

    if(lists.length === 1) {
        lists[0]
    }
    let res = lists[0]
    for(let i = 1; i < lists.length; i++) {
        res = mergeTwoLists(res, lists[i])
    }

    return res;
};

var mergeKLists1 = function(lists) {
    if(lists.length === 0) {
        return null
    }

    if(lists.length === 1) {
        lists[0]
    }
    const params = lists;
    while(params.length > 1) {
        const param1 = params.shift();
        const param2 = params.shift();

        params.push(mergeTwoLists(param1, param2));
    }

    return params[0];
};

// 二叉树的中序遍历
var inorderTraversal = function(root) {

}; 

// console.log(mergeKLists1([createNodeList([1,4,5]), createNodeList([1,3,6]), createNodeList([2,6])]).print())

// 环形链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while(slow !== fast) {
        if(!slow || !fast) {
            return false
        }
        slow = slow.next;
        fast = fast.next?.next;
    }
    return true
};


// 排序链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var sortList = function(head) {
//     const tmp = [];
//     let cur = head;
//     while(cur) {
//         tmp.push(cur);
//         cur = cur.next;
//     }
//     fastSort(tmp);
//     for(let i = 0; i < tmp.length; i++) {
//         if(i === tmp.length - 1) {
//             tmp[i].next = null;
//         } else {
//             tmp[i].next = tmp[i+1]
//         }
//     }
//     return tmp[0];
// };

// function fastSort(arr, i, j) {
//     console.log(arr);
//     let L = i === undefined ? 0 : i;
//     let R = j === undefined ? arr.length - 1 : j;
//     if(L<R) {
//         const x = fastSortInner(arr, L, R);
//         fastSort(arr, L, x-1);
//         fastSort(arr, x+1, R);
//     }
// }

// function fastSortInner(arr, i, j) {
//     let L = i;
//     let R = j;
//     let cur = arr[i]
//     while(L < R) {
//         while(arr[R].val > cur.val && L < R) {
//             R--;
//         }
//         arr[L] = arr[R];
//         while(arr[L].val < cur.val && L < R) {
//             L++;
//         }
//         arr[R] = arr[L]
//     }
//     arr[L] = cur;
//     return L;
// }

var sortList = function(head) {
    return sort(head);
    function sort(head, tail) {
        // console.log(head, tail)
        if(head.next = tail) {
            head.next.next = null
        }
        if(head === tail) {
            head.next = null
        }
        if(!head || head.next === tail || head === tail) {
            return head
        }
        let fast = head;
        let slow = head;
        slow = slow.next;
        slow = slow.next;
        while(fast !== tail && fast) {
            fast = fast.next;
            slow = slow.next;
            if(fast !== tail) {
                fast = fast?.next;
            }
        }
        return merge(sort(head, slow), sort(slow.next, fast))
    }

    function merge(list1, list2){
        // console.log(list1, list2)
        if(!list1 && list2) {
            return null
        }
        if(list1 && !list2) {
            return list1
        }
        if(!list1 && list2) {
            return list2
        }
        let head1 = list1;
        let head2 = list2;
        let pre
        if(head1.val < head2.val) {
            pre = head1;
            head1 = head2.next
        } else {
            pre = list2;
            head2 = head2.next
        }
        while(head1 && head2) {
            if(head1.val < head2.val) {
                pre.next = head1;
                pre = pre.next;
                head1 = head1.next;
            } else {
                pre.next = head2;
                pre = pre.next;
                head2 = head2.next;
            }
        }
        if(!head1) {
            pre.next = head2;
        }
        if(!head2) {
            pre.next = head1;
        }
        // console.log(list1.val < list2.val ? list1 : list2)
        return list1.val < list2.val ? list1 : list2;

    }
}
const test1 = [6,8,7,9,0,1,3,2,4,5];
console.log(sortList(createNodeList(test1)))

// 反转链表
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head) {
        return head
    }
    let pre = head;
    let h = head;
    let next = head.next;
    while(pre) {
        pre = h;
        h = next;
        next = next.next;
        h.next = pre;
    }
    return head;
};