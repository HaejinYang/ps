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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if(root === null) {
        return false;
    }

    const IsLeaft = (node: TreeNode): boolean => {
        return (node.left === null && node.right === null);
    }

    const SumRootToLeafByRecursively = (node: TreeNode | null, accumulated: number, targetSum: number): boolean => {
        if(IsLeaft(node)) {
            return ((accumulated + node.val) === targetSum);
        }

        const leftResult: boolean = node.left === null ? false : SumRootToLeafByRecursively(node.left, accumulated + node.val, targetSum);
        const rightResult: boolean = node.right === null ? false : SumRootToLeafByRecursively(node.right, accumulated + node.val, targetSum);

        return (leftResult || rightResult);
    }

    return SumRootToLeafByRecursively(root, 0, targetSum);
};