function searchRange(nums: number[], target: number): number[] {
    // 같거나 크다?
    // 바이너리 서치

    let left = 0;
    let right = nums.length - 1;
    let targetIndex = -1;
    while(left <= right) {
        const middle = Math.floor((left + right) / 2);

        if(nums[middle] === target) {
            targetIndex = middle;

            break;
        }

        if(nums[left] <= target && target <= nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    if(targetIndex === -1 ) {
        return [-1, -1];
    } else {
        let left = targetIndex;
        let right = targetIndex
        while(true) {
            let leftComplete= false;
            let rightComplete = false;
            if(left - 1 >= 0 && nums[left - 1] === target) {
                --left;
            } else {
                leftComplete = true;
            }

            if(right + 1 <= nums.length - 1 && nums[right + 1] === target) {
                ++right;
            } else {
                rightComplete = true;
            }

            if(leftComplete && rightComplete) {
                break;
            }
        }

        return [left, right];
    }
};