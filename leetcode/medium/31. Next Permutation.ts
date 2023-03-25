/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    // 규칙을 찾는데 실패하여 힌트를 봄

    //1. 우측 -> 좌측으로 오름차순이 끝나는 i를 찾음. 만약 없다면 max인것
    let index = nums.length - 2;
    while(nums[index] >= nums[index + 1] && index >= 0) {
        --index;
    }

    // 가장 큰 퍼뮤테이션
    if(index === -1) {
        nums.reverse();
    } else {
        // 2. 우측부터 다시 nums[index]보다 큰 값을 가진 인덱스 j를 찾는다
        // 3. i와 j의 값을 스왑
        // 4. i + 1 부터 오름차순으로 정렬
        for(let j = nums.length - 1; j >= 0; j--) {
            if(nums[j] > nums[index]) {
                const target = nums[j];
                nums[j] = nums[index];
                nums[index] = target;

                const slice = nums.slice(index + 1);
                slice.sort((a, b) => a - b);
                nums.splice(index + 1, nums.length - (index + 1), ...slice);

                break;
            }
        }
    }
};