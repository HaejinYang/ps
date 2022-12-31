/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // 동시에 같이 순회해서 다른 경우가 생기면 다른 트리인가

    const checkEqualRecursively = (p: TreeNode | null, q: TreeNode | null): boolean => {
        if(p === null && q === null) {
            return true;
        }

        if(p === null || q === null) {
            return false;
        }

        if(p.val !== q.val) {
            return false;
        }

        if(!checkEqualRecursively(p.left, q.left)) {
            return false;
        }

        if(!checkEqualRecursively(p.right, q.right)) {
            return false;
        }

        return true;
    }

    return checkEqualRecursively(p, q);
};