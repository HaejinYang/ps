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

function removeElements(head: ListNode | null, val: number): ListNode | null {
    const MAX = Number.MAX_VALUE;
    const virtualHead: ListNode = new ListNode(MAX, head);
    let prev = virtualHead;
    let current = virtualHead.next;

    while(current !== null) {
        if(current.val === val) {
            prev.next = current.next;
        } else {
            prev = current;
        }

        current = current.next;
    }

    return virtualHead.next;
};