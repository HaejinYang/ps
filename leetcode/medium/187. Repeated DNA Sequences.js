/**
 * @param {string} s
 * @return {string[]}
 */
// 10글자 서브스트링인데, 2번 이상 나온것.
var findRepeatedDnaSequences = function (s) {
  const store = new Map();
  const TARGET_LENGTH = 10;
  let left = 0;
  let right = 0;

  while (right <= s.length && left < s.length) {
    const length = right - left;

    if (length < TARGET_LENGTH) {
      ++right;
    } else if (length === TARGET_LENGTH) {
      const cand = s.substring(left, right);
      const stored = store.get(cand);
      if (stored) {
        store.set(cand, stored + 1);
      } else {
        store.set(cand, 1);
      }

      ++right;
    } else {
      //   console.assert(
      //     length < TARGET_LENGTH,
      //     `in this condition, length should be more than TARGET_LENGTH: ${TARGET_LENGTH}`
      //   );

      ++left;
    }
  }

  const result = [];
  store.forEach((v, k, m) => {
    if (v > 1) {
      result.push(k);
    }
  });

  return result;
};
