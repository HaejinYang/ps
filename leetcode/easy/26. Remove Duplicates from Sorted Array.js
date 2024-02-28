/**
 * @param {number[]} nums
 * @return {number} 
 */
var removeDuplicates = function(nums) {
    let prev = nums[0];
    const MAX = 101;
    let duplicateCount = 0;
    for(let i = 1; i < nums.length; i++) {
        if(prev === nums[i]) {
            nums[i] = MAX; 
            duplicateCount++;
        } else {
            prev = nums[i];
        }
    } 

    console.log(nums);
    nums.sort((lhs, rhs) => {
        return lhs - rhs;
    });
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 'MAX') {
            nums[i] = '_';
        }
    }

    return nums.length - duplicateCount;
};