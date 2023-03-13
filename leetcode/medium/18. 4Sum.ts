function fourSum(nums: number[], target: number): number[][] {
    const duplicatedChecker: Set<string> = new Set<string>();
    const result: number[][] = [];
    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            let l = j + 1;
            let r = nums.length - 1;

            while(l < r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];

                if(sum === target) {
                    const key: string = [nums[i], nums[j], nums[l], nums[r]].join(",");
                    if(!duplicatedChecker.has(key)) {
                        duplicatedChecker.add(key);
                        result.push([nums[i], nums[j], nums[l], nums[r]]);
                    } else {
                        ++l;
                        --r;
                    }
                } else if(sum < target) {
                    ++l;
                } else {
                    --r;
                }
            }
        }
    }

    return result;
};