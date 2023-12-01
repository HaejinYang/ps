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
 * @return {boolean}
 */
var isValidBST = function (root) {
  let result = true;

  const isLeftSubTreeIsLess = (node, val) => {
    if (!node) {
      return true;
    }

    if (node.val >= val) {
      return false;
    }

    return (
      isLeftSubTreeIsLess(node.left, val) &&
      isLeftSubTreeIsLess(node.right, val)
    );
  };

  const isRightSubTreeIsGreater = (node, val) => {
    if (!node) {
      return true;
    }

    if (node.val <= val) {
      return false;
    }

    return (
      isRightSubTreeIsGreater(node.left, val) &&
      isRightSubTreeIsGreater(node.right, val)
    );
  };

  const judge = (node) => {
    if (result === false) {
      return;
    }

    if (node.left) {
      if (!isLeftSubTreeIsLess(node.left, node.val)) {
        result = false;
        return;
      }
    }

    if (node.right) {
      if (!isRightSubTreeIsGreater(node.right, node.val)) {
        result = false;
        return;
      }
    }

    if (node.left) {
      judge(node.left);
    }

    if (node.right) {
      judge(node.right);
    }
  };

  judge(root);

  return result;
};
