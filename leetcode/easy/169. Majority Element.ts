function majorityElement(nums: number[]): number {
    // 최소 1/2이니까
    // 배열을 정렬하고, 중간것을 취하면 되겠지만, 그러면 O(nlogn)이 되니까, 조건에 안맞음.
    // 찾아보니 무어 투표 알고리즘이란게 있네

    const result: {count: number; answer: number} = nums.reduce(( acc: {count: number; answer: number;}, current, index, arr) =>{
        if(acc.count == 0) {
            acc.answer = current;
        }

        if(acc.answer === current) {
            acc.count++;
        } else {
            acc.count--;
        }

        return acc;
    }, {count: 0, answer: 0});

    return result.answer;
};