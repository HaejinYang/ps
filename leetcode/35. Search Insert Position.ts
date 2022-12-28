function searchInsert(nums: number[], target: number): number {
    let ret: number = nums.indexOf(target);
    if(ret !== -1) {
        return ret;
    }

    nums.push(target);
    nums.sort((lhs, rhs) => lhs - rhs);
    return nums.indexOf(target);
};