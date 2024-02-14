/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
  const dfs = (node, sum) => {
    let leftSum = 0;
    let rightSum = 0;
    if (node.left) {
      leftSum = dfs(node.left, sum * 10 + node.left.val);
    }

    if (node.right) {
      rightSum = dfs(node.right, sum * 10 + node.right.val);
    }

    // leaf
    if (!node.left && !node.right) {
      return sum;
    }

    return leftSum + rightSum;
  };

  const result = dfs(root, root.val);

  return result;
};
