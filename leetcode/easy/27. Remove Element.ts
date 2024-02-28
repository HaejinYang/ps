function removeElement(nums: number[], val: number): number {
    // nums = nums.filter((cur) => cur !== val); inplace이기에 불가
    const MAX: number = 999;
    let removeCount: number = 0;
    for(let i: number = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            nums[i] = MAX;
            removeCount++;
        }
    }

    nums.sort((a, b) => a - b);    

    return nums.length - removeCount;
};