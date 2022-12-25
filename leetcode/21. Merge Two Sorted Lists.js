/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(!list1) {
        return list2;
    } else if(!list2) {
        return list1;
    }

    let ret;
    if(list1.val < list2.val) {
        ret = new ListNode(list1.val);
        list1 = list1.next;
    } else {
        ret = new ListNode(list2.val);
        list2 = list2.next;
    }

    let cursor = ret;
    
    while(list1 && list2) {
        let newNode;
        if(list1.val < list2.val) {
            newNode = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            newNode = new ListNode(list2.val);
            list2 = list2.next;
        }

        cursor.next = newNode;
        cursor = cursor.next;
    }

    if(list1) {
        cursor.next = list1;
    } else if(list2) {
        cursor.next = list2;
    }

    return ret;
};