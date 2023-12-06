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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }

  const q = [root];
  const result = [];
  let isLeftToRight = true;
  while (q.length !== 0) {
    const sizeOfCurrentLevel = q.length;
    let answerOfCurrentLevel = [];
    for (let i = 0; i < sizeOfCurrentLevel; i++) {
      const node = q.shift();

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

      answerOfCurrentLevel.push(node.val);
    }

    if (!isLeftToRight) {
      answerOfCurrentLevel = answerOfCurrentLevel.reverse();
    }

    result.push(answerOfCurrentLevel);
    isLeftToRight = !isLeftToRight;
  }

  return result;
};
