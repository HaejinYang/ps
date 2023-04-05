function maxSubArray(nums: number[]): number {
    /*
        [0, 0]; -2
        [0, 1]; -1
        [0, 2]; -4????? 이전보다 작아졌다.
        [3, 3]; 4
        [3, 4]; 3????? 이전보다 작아지긴 했는데, 이전 부분합의 최대인 -1보단 작지 않으니까 계속

        이전 부분합 + 현재 값(A)
        현재 값(B)을 비교했을 때,
        A가 B보다 작다면, A를 살릴 이유가..... 없네
    */

    let prevAcc: number = nums[0];
    let max: number = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(prevAcc + nums[i] < nums[i]) {
            prevAcc = nums[i];
        } else {
            prevAcc += nums[i];
        }

        max = Math.max(prevAcc, max);
    }

    return max;
};