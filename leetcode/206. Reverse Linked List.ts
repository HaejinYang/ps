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

function reverseList(head: ListNode | null): ListNode | null {
    if(head === null) {
        return head;
    }

    if(head.next === null) {
        return head;
    }

    let current: ListNode | null = head;
    let prev: ListNode | null = null;

    while(current !== null) {
        const originalNext: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = originalNext;
    }

    return prev;
};