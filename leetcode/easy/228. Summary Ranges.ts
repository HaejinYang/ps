function summaryRanges(nums: number[]): string[] {
    if(nums.length === 0) {
        return [];
    }

    if(nums.length === 1) {
        const arr: string[] = [];
        arr.push(nums[0].toString());
        return arr;
    }

    const result: string[] = [];
    let prevNumber: number = nums[0];
    let string = `${prevNumber}`;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] - prevNumber === 1) {
            const replaceIndex = string.indexOf('->');
            if(replaceIndex === -1) {
                string += `->${nums[i]}`;
            } else {
                string = string.slice(0, replaceIndex) + `->${nums[i]}`;
            }
        } else {
            result.push(string);
            string = `${nums[i]}`;
        }

        prevNumber = nums[i];
    }

    result.push(string);


    return result;
};