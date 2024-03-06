/**
 * https://leetcode.com/problems/h-index/?envType=study-plan-v2&envId=top-interview-150
 * time O(nlogn) space(1) 50ms, 78.33
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // 적어도 N개의 페이퍼가 N번이상 공유되었을때 가장 큰 N
  // [4,4,0,0] 2개의 페이퍼가 4번이상, 2개의 페이퍼가 0번이상, 2개의 페이퍼가 2번.
  citations.sort((a, b) => b - a);

  // 루프를 하나씩 돌때마다 페이퍼수와 페이퍼 최대 공유횟수를 카운트
  // 2번 돌았고, 최대 4번
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    let current = Math.min(citations[i], i + 1);
    h = Math.max(h, current);
  }

  return h;
};

// 두 번째 풀이 time o(n), space o(n)
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  // 적어도 N개의 페이퍼가 N번이상 공유되었을때 가장 큰 N
  // [4,4,0,0] 2개의 페이퍼가 4번이상, 2개의 페이퍼가 0번이상, 2개의 페이퍼가 2번.
  const MAX_VALUE = 1000;
  const MAX_LENGTH = 5000;
  const candidate = Array(MAX_LENGTH).fill(0);
  citations.forEach((h) => candidate[h]++);
  let count = 0;
  let h = 0;
  for (let i = MAX_LENGTH - 1; i >= 0; i--) {
    if (candidate[i] !== 0) {
      count += candidate[i];
    }

    const current = Math.min(count, i);
    h = Math.max(h, current);
  }

  return h;
};
