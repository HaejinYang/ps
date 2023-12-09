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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) {
    return [];
  }

  const result = [];
  const preOrderTraversal = (node, sum, path) => {
    path.push(node.val);
    sum += node.val;

    if (node.left) {
      preOrderTraversal(node.left, sum, [...path]);
    }

    if (node.right) {
      preOrderTraversal(node.right, sum, [...path]);
    }

    if (!node.left && !node.right) {
      if (sum === targetSum) {
        result.push([...path]);
      }
    }
  };

  preOrderTraversal(root, 0, []);

  return result;
};
