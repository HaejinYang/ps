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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let maxDepth = -1;
    const dfs = (node: ListNode | null, prev: ListNode | null, depth: number) => {
        if(node === null) {
            // 끝까지 온것
            maxDepth = depth;
            return;
        }

        dfs(node.next, node, depth + 1);
        //현재 depth는 depth
        if((maxDepth - n) === depth) {
            // 없애야 할 노드를 찾았다.
            if(prev) {
                prev.next = node.next;
            } else {
                head = head.next;
            }
        }

    };

    dfs(head, null, 0);

    return head;
};