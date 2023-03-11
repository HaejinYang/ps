function threeSumClosest(nums: number[], target: number): number {

    let i = 0;
    let minDiff = Number.MAX_VALUE;
    let result = 0;
    let sortedNums = nums.sort((a, b) => a - b);
    for(let i = 0; i < sortedNums.length; i++) {
        let l = i + 1;
        let r = nums.length - 1;

        while(l < r) {
            const sum = sortedNums[i] + sortedNums[l] + sortedNums[r];
            const diff = GetDiff(target, sum);
            const absDiff = Math.abs(diff);

            if(absDiff < minDiff) {
                minDiff = absDiff;
                result = sum;
            }

            if(diff > 0) {
                ++l;
            } else {
                --r;
            }
        }
    }

    return result;
};

function GetDiff(target: number, current: number) {
    return target - current;
}