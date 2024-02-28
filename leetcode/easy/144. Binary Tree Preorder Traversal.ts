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

function preorderTraversal(root: TreeNode | null): number[] {
    const TraversalByRecursively = (node: TreeNode | null, arr: number[]) => {
        if(node === null) {
            return;
        }

        arr.push(node.val);
        TraversalByRecursively(node.left, arr);
        TraversalByRecursively(node.right, arr);
    }

    const result: number[] = [];
    TraversalByRecursively(root, result);
    return result;
};