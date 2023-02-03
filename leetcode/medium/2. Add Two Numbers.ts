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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let [sum, carry]: [number, number] = [0, 0];
    let head: ListNode | null = new ListNode();
    let current: ListNode | null = head;
    while(l1 !== null && l2 !== null) {
        sum = (l1.val + l2.val + carry) % 10;
        carry = Math.trunc(((l1.val + l2.val) / 10));

        const temp: ListNode = new ListNode(sum);
        current.next = temp;
        current = temp;

        l1 = l1.next;
        l2 = l2.next;
    }

    while(l1 !== null) {
        sum = (l1.val + carry) % 10;
        carry = Math.trunc(((l1.val + carry) / 10));

        const temp: ListNode = new ListNode(sum);
        current.next = temp;
        current = temp;

        l1 = l1.next;
    }

    while(l2 !== null) {
        sum = (l2.val + carry) % 10;
        carry = Math.trunc(((l2.val + carry) / 10));

        const temp: ListNode = new ListNode(sum);
        current.next = temp;
        current = temp;

        l2 = l2.next;
    }

    if(carry > 0) {
        const temp: ListNode = new ListNode(carry);
        current.next = temp;
        current = temp;
    }

    return head.next;
};