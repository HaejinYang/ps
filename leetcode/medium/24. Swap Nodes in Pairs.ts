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

function swapPairs(head: ListNode | null): ListNode | null {
    // 노드 2개씩 바꾸는데... 2개 바꿔도 이전 노드의 두 번째 노드에서 다시 바꿔줘야함

    let prev: ListNode | null = head;
    if(!prev) {
        return null;
    }

    let current: ListNode | null = prev.next;
    if(!current) {
        return prev;
    }

    let lastPrev: ListNode | null = null;
    let newHead: ListNode | null = null;
    let isSwap: boolean = true;
    while(current) {
        if(isSwap) {
            const next = current.next;
            current.next = prev;
            if(!newHead) {
                newHead = current;
            }
            if(lastPrev && !lastPrev.next) {
                lastPrev.next = current;
            }
            //prev.next = ?? 다음 라운드에 결정된
            lastPrev = prev;
            lastPrev.next= null;
            current = next;
            isSwap = false;
        } else {
            prev = current;
            current = current.next;
            if(current === null) {
                lastPrev.next = prev;
            }
            isSwap = true;
        }
    }

    return newHead;
};