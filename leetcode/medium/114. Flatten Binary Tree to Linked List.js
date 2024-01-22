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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  if (!root) {
    return null;
  }

  const valArr = [];
  const flattenRecursively = (node) => {
    if (!node) {
      return null;
    }

    valArr.push(node.val);
    flattenRecursively(node.left);
    flattenRecursively(node.right);
  };

  flattenRecursively(root);

  // arr [1, 2, 3, 4, 5, 6, 7];
  root.left = null;
  let current = root;
  for (let i = 1; i < valArr.length; i++) {
    current.right = new TreeNode(valArr[i], null, null);
    current = current.right;
  }
};
