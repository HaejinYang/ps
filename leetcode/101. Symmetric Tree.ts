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

function isSymmetric(root: TreeNode | null): boolean {
    if(root === null) {
        return true;
    }

    // 하나는 우측, 하나는 좌측으로 inorder로 가면 traversal..

    const isSymmetricRecursively = (lhs: TreeNode | null, rhs: TreeNode | null): boolean => {
        if(lhs === null && rhs === null) {
            return true;
        }

        if(lhs === null || rhs === null) {
            return false;
        }

        if(!isSymmetricRecursively(lhs.left, rhs.right)) {
            return false;
        }

        if(lhs.val !== rhs.val) {
            return false;
        }

        if(!isSymmetricRecursively(lhs.right, rhs.left)) {
            return false;
        }

        return true;
    }

    return isSymmetricRecursively(root.left, root.right);
};