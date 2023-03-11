function threeSum(nums: number[]): number[][] {
    const sortedNums = nums.sort((a, b) => a - b);
    const duplicated = new Set<string>();
    const res: number[][] = [];
    for(let i = 0; i < sortedNums.length; i++) {
        let l = i + 1;
        let r = sortedNums.length - 1;

        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if(sum === 0) {
                const key = [nums[i], nums[l], nums[r]].join(",");
                if(!duplicated.has(key)) {
                    duplicated.add(key);
                    res.push([nums[i], nums[l], nums[r]]);
                }

                ++l;
                --r;
            } else if(sum < 0) {
                ++l;
            } else {
                --r;
            }
        }
    }

    return res;

    // 모든 원소 중에서 3개를 골라 선택...?
    // n C 3이네
    // const stored = new Set<string>();
    // const result: number[][] = [];
    // for(let i = 0; i < nums.length; i++) {
    //     for(let j = i + 1; j < nums.length; j++) {
    //         const keyArr = [nums[i], nums[j]].sort((a, b) => {
    //                     return a-b;
    //                 });
    //         const key2 = keyArr.join(",");
    //         if(stored.has(key2)) {
    //             continue;
    //         }

    //         for(let k = j + 1; k < nums.length; k++) {
    //             const sum = nums[i] + nums[j] + nums[k];
    //             if(sum === 0) {
    //                 const keyArr: number[] = [nums[i], nums[j], nums[k]].sort((a, b) => {
    //                     return a-b;
    //                 });

    //                 const key1 = keyArr.join(",");
    //                 const key2 = keyArr.slice(0, 2).join(",");

    //                 if(!stored.has(key2)) {
    //                     stored.add(key2);
    //                 }

    //                 if(!stored.has(key1)) {
    //                     stored.add(key1);
    //                     result.push([nums[i], nums[j], nums[k]]);
    //                 }

    //                 break; // 세번째 시도... 여기서 끝내도 상관없다.
    //             }
    //         }
    //     }
    // }

    // return result;

    // 위의 시도는 타임리미트가 발생하는 솔루션
    // nC3은 실패했다... 그렇다면 -ㅅ-;; 뭔가 덜봐도 되는건가?
    // 생각해보니, 리턴한 결과에서 순서가 다른건 하나로 퉁치네.그러면, 입력값에서도 그래도 될거같은데

    // const deduplication = Array.from(new Set<number>(nums));
    // const stored = new Set<string>();
    // const result: number[][] = [];
    // for(let i = 0; i < deduplication.length; i++) {
    //     for(let j = i + 1; j < deduplication.length; j++) {
    //         for(let k = j + 1; k < deduplication.length; k++) {
    //             const sum = deduplication[i] + deduplication[j] + deduplication[k];
    //             if(sum === 0) {
    //                 const key: string = [deduplication[i], deduplication[j], deduplication[k]].sort((a, b) => {
    //                     return a-b;
    //                 }).join("");

    //                 if(!stored.has(key)) {
    //                     stored.add(key);
    //                     result.push([deduplication[i], deduplication[j], deduplication[k]]);
    //                 }
    //             }
    //         }
    //     }
    // }
    // return result;

    // 두 번째 시도... 발상은 괜찮은거 같은데... 서로 다른 인덱스에 같은 값이 있으면 하나로 취급되어 제대로 답이 안나옴.
};