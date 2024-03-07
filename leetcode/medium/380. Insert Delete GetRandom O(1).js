// https://leetcode.com/problems/insert-delete-getrandom-o1/?envType=study-plan-v2&envId=top-interview-150
// 첫 번째 풀이. 요건에 다맞는데 느려 왜?... 1540ms / 5%
// 바로 try-catch문 때문인거같은데.....
// 아 그런데, 애초에 O(1)이 아니었네
var RandomizedSet = function () {
  this.store = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.store.has(val)) {
    return false;
  }

  this.store.set(val, 1);

  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.store.has(val)) {
    this.store.delete(val);

    return true;
  }

  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const length = this.store.size;
  const target = Math.floor(Math.random() * length);
  let count = 0;
  let value = 0;

  const iter = this.store.keys();
  while (true) {
    if (count === target) {
      value = iter.next().value;
      break;
    }

    ++count;
  }

  return value;
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
