function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const duplicated: Map<number, Array<number>> = new Map<number, Array<number>>();

    let index: number = 0;
    while(index < nums.length) {
        if(duplicated.has(nums[index])){
            duplicated.get(nums[index]).push(index);
        } else {
            duplicated.set(nums[index], [index]);
        }

        index++
    }

    for(const [key, value] of duplicated) {
        if(value.length < 2) {
            continue;
        }

        for(let i = 0; i < value.length - 1; i++) {
            if(Math.abs(value[i] - value[i + 1]) <= k) {
                return true;
            }
        }
    }
    return false;
};