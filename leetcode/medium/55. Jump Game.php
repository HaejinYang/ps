<?php
class Solution {
    // https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150
    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function canJump($nums) {
        // 첫 번째 인덱스에서 시작
        // 각 원소 값은 최대 점프 가능 거리를 의미함
        // 마지막 인덱스에 도달할 수 있으면 true 아니면 false
        
        $length = count($nums);
        if($length === 1) {
            return true;
        }

        $maxJump = 0 + $nums[0];
        if($maxJump === 0) {
            return false;
        }

        for($index = 0; $index < ($length-1); $index++) {
            $currentJump = $index + $nums[$index];
            if($maxJump < $currentJump) {
                $maxJump = $currentJump;
            }

            if($maxJump <= $currentJump && $nums[$index] === 0) {
                return false;
            }

            if($maxJump >= $length - 1) {
                return true;
            }
        }

        return false;
    }
}