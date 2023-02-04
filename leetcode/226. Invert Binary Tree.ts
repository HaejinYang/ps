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

function invertTree(root: TreeNode | null): TreeNode | null {
    const invertRecursively = (node: TreeNode | null) => {
        if(node === null) {
            return;
        }

        const tempNode: TreeNode | null = node.left;
        node.left = node.right;
        node.right = tempNode;

        invertRecursively(node.left);
        invertRecursively(node.right);
    };

    invertRecursively(root);

    return root;
};