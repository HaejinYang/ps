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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head === null) {
        return head;
    }

    const save: ListNode = head;
    let prev: ListNode = head;
    let current: ListNode | null = head.next;
    while(current !== null) {
        if(prev.val === current.val) {
            prev.next = current.next;
        } else {
            prev = current;
        }

        current = current.next;
    }

    return save;
};