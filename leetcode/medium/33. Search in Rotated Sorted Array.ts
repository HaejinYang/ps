function search(nums: number[], target: number): number {
    // 1. find pivot
    // left or right인데 선택하는 기준은 오름차순이 깨지는것.
    // left middle right인데, 만약 left가 middle보다 크다면 right가 middle
    //

    let left = 0;
    let right = nums.length - 1;
    let pivot = -1;
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);

        if(nums[middle] === target) {
            pivot = middle;

            break;
        }

        // left - middle 오름차순인 경우
        if(nums[left] <= nums[middle]) {
            if(nums[left] <= target && target <= nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }

        } else{
            // middle - right 오름차순인 경우
            if(nums[middle] <= target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }

    return pivot
};