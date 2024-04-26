/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // 최장 부분 증가 수열 개념을 배우고 푸는 문제. 방금전에 배워서 답을 알고있다.
  /**
        10 9 2 5 3 7 101 18
        1  1 1 2 2 3  4   4

        memo[i] = 0 ~ i 구간의 최장 부분 증가 수열의 길이가 저장됨
        memo[0] = 0 ~ 0 구간의 ..
        memp[1] = 0 ~ 1 구간의 ..

        이 때, memo[i]를 구하려면, 1) nums[0] ~ nums[i-1]의 숫자들 중에서 nums[i]보다 작은 숫자를 고르고
        그 중에서 가장 큰 최장 부분 증가 수열을 지닌 것을 선택하고 + 1 하면 됨.
        2) 1)을 만족하는 것들 중에서 memo[0]~memo[i-1] 중에서 가장 큰 것을 선택
        3) memo[i]는 선택된 것 + 1. 

        // 그런데 O(nlogn)은 뭘까...
     */
  const memo = new Array(nums.length).fill(0);

  let answer = 0;
  let max = -1 * Math.pow(10, 4) - 1;
  for (let i = 0; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && max < memo[j]) {
        max = memo[j];
      }
    }

    memo[i] = max + 1;
    answer = Math.max(answer, memo[i]);
  }

  return answer;
};
