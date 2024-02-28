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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if(headA === null || headB === null) {
        return null;
    }

    const set: Set<ListNode> = new Set<ListNode>();

    while(headA !== null) {
        set.add(headA);
        headA = headA.next;
    }

    let result: ListNode | null = null;
    while(headB !== null) {
        if(set.has(headB)){
            result = headB;

            break;
        }

        headB = headB.next;
    }

    return result;
};