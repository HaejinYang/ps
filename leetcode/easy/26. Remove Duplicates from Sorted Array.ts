function removeDuplicates(nums: number[]): number {
    const MAX: number = 101;
    let prev: number = nums[0];
    let duplicateCount: number = 0;
    
    for(let i: number = 1; i < nums.length; i++) {
        if(prev === nums[i]) {
            nums[i] = MAX;
            duplicateCount++;
        } else {
            prev = nums[i];
        }
    }

    nums.sort((lhs: number, rhs: number) => {
        return (lhs - rhs);
    });

    return nums.length - duplicateCount;    
};