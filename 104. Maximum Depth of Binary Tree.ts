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

function maxDepth(root: TreeNode | null): number {
    if(root === null) {
        return 0;
    }

    const calculateByRecursively = (node: TreeNode | null, depth: number): number => {
        if(node === null) {
            return depth - 1;
        }

        const leftDepth: number = calculateByRecursively(node.left, depth + 1);
        const rightDepth: number = calculateByRecursively(node.right, depth + 1);

        return Math.max(leftDepth, rightDepth);
    };

    return calculateByRecursively(root, 1);
};