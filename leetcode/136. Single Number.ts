function singleNumber(nums: number[]): number {
    return nums.reduce((acc, val, index, arr) => acc ^ val, 0);
};