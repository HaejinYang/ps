// function canJump(nums: number[]): boolean {
//     /*
//         2 3 1 1 4
//     2   0 1 1 0 0
//     3     0 1 1 1
//
//     */
//
//     let distance: number[] = Array<number>(nums.length).fill(0);
//     distance[0] = 1;
//     for(let i = 0; i < nums.length; i++) {
//         for(let j = 0; j < nums[i]; j++) {
//             if(i + j + 1 < nums.length) {
//                 distance[i + j + 1]++;
//             }
//         }
//
//         if(distance[i] === 0) {
//             return false;
//         }
//         /*
//         여기서 미리 거르면 기존 하위 16% 실행시간에서 36%로 상승.
//         if(distance[nums.length - 1] !== 0) {
//             return true;
//         }
//          */
//     }
//
//     return distance[nums.length - 1] !== 0;
// };