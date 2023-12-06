/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) {
    return root;
  }

  const q = [root];

  while (q.length !== 0) {
    const sizeOfCurrentLevel = q.length;
    let lastNode = null;
    for (let i = 0; i < sizeOfCurrentLevel; i++) {
      const node = q.shift();

      if (lastNode !== null) {
        lastNode.next = node;
      }

      if (node.left) {
        q.push(node.left);
      }

      if (node.right) {
        q.push(node.right);
      }

      lastNode = node;
    }

    lastNode.next = null;
  }

  return root;
};
