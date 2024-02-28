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

function sortedArrayToBST(nums: number[]): TreeNode | null {

    const CreateTreeByRecursively = (start: number, end: number): TreeNode | null => {
        if(start > end) {
            return null;
        }

        const mid: number = Math.floor((start + end) / 2);
        const node: TreeNode = new TreeNode(nums[mid]);
        console.log(start, end, mid, nums[mid]);
        node.left = CreateTreeByRecursively(start, mid - 1);
        node.right = CreateTreeByRecursively(mid + 1, end);

        return node;
    };

    return CreateTreeByRecursively(0, nums.length - 1);
};