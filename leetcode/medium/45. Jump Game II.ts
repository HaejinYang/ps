function jump(nums: number[]): number {
    /*
                0   1   2   3   4   5   6   7
    점프횟수    0
    */

    const d: number[] = Array<number>(nums.length).fill(0);
    let i = 0;
    while(i < nums.length) {
        const range = nums[i];
        for(let j = 1; j <= range; j++) {
            if(i + j < nums.length) {
                if(d[i + j] === 0) {
                    d[i + j] = d[i] + 1;
                }
            }
        }

        ++i;
    }

    return d[nums.length - 1];
};