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

function minDepth(root: TreeNode | null): number {
    if(root === null) {
        return 0;
    }
    // root node depth : 1
    // find lead
    // return depth;
    // node 10^5... 100,000 2^10 1024 * 1024
    const MAX_DEPTH: number = 1024 ** 2;
    const IsLeaf = (node: TreeNode): boolean => {
        return (node.left === null && node.right === null);
    };

    const findMinDepthByRecursively = (node: TreeNode | null, depth: number): number => {
        if(IsLeaf(node)) {
            return depth;
        } else {
            const leftSubTreeDepth: number = (node.left === null) ? MAX_DEPTH : findMinDepthByRecursively(node.left, depth + 1);
            const rightSubTreeDepth: number = (node.right === null) ? MAX_DEPTH : findMinDepthByRecursively(node.right, depth + 1);

            return Math.min(leftSubTreeDepth, rightSubTreeDepth);
        }
    };

    return findMinDepthByRecursively(root, 1);
};