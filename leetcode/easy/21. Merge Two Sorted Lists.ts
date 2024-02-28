/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if(list1 === null) {
        return list2;
    }

    if(list2 === null) {
        return list1;
    }

    let result: ListNode | null = null;
    if(list1.val < list2.val) {
        result = new ListNode(list1.val, null);
        list1 = list1.next;
    } else {
        result = new ListNode(list2.val, null);
        list2 = list2.next;
    }

    let cursor: ListNode = result;

    while(list1 !== null && list2 !== null) {
        let newNode: ListNode | null = null;
        if(list1.val < list2.val) {
            newNode = new ListNode(list1.val, null);
            list1 = list1.next;
        } else {
            newNode = new ListNode(list2.val, null);
            list2 = list2.next;
        }

        cursor.next = newNode;
        cursor = cursor.next;
    }

    if(list1 === null) {
        cursor.next = list2;
    }

    if(list2 === null) {
        cursor.next = list1;
    }

    return result
};