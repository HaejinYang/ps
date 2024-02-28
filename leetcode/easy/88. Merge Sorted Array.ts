/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m, n, ...nums2);
    nums1.sort((lhs, rhs) => lhs - rhs);
};

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
    if((m + n) === 0) {
        return;
    }

    // 인덱스 m-1과 n-1을 비교하여 큰 것을 m + n - 1로 보낸다.
    // 보내쪽 인덱스를 -- 한다.
    while(m > 0 && n > 0) {
        if(nums1[m - 1] >= nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m - 1];
            --m;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            --n;
        }
    }

    while(n > 0) {
        nums1[n - 1] = nums2[n - 1];
        --n;
    }
};