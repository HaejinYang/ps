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

function isBalanced(root: TreeNode | null): boolean {
    if(root === null) {
        return true;
    }

    const calculateMaxDepth = (node: TreeNode | null, depth: number): number => {
        if(node === null) {
            return depth - 1;
        }

        const leftSubTreeDepth: number = calculateMaxDepth(node.left, depth + 1);
        const rightSubTreeDepth: number = calculateMaxDepth(node.right, depth + 1);
        if(leftSubTreeDepth === -1 || rightSubTreeDepth === -1) {
            return -1;
        }

        const diff: number = Math.abs(leftSubTreeDepth - rightSubTreeDepth);
        if(diff > 1) {
            return -1;
        } else {
            return Math.max(leftSubTreeDepth, rightSubTreeDepth);
        }
    }

    const result: number = calculateMaxDepth(root, 1);

    return !(result === -1);
};