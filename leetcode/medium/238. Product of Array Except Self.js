/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // 솔루션을 참고하였음.
  // answer[i]는 nums[i]을 제외한 나머지의 곱
  /**
        0               1            2           3           4
        1234            0234        0134        0124        0123
        // 아 i를 기준으로 i보다 작은것을 다 곱하고, i보다 큰것을 다 곱하고?
    */
  const answer = Array(nums.length).fill(1);

  // i보다 작은 것들을 곱해서 i에 넣는다
  let mul = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] *= mul;
    mul *= nums[i];
  }

  // i보다 큰 것들을 곱해서 i에 넣는다.
  mul = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= mul;
    mul *= nums[i];
  }

  return answer;
};
