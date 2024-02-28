<?php
// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150


// 첫 번째 풀이: 11ms / 80.43%
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        $size = count($nums);
        $writeIndex = 1;
        $duplicated = 0;
        for($index = 1; $index < $size; $index++) {
            if($nums[$index] === $nums[$index - 1]) {
                ++$duplicated;

                if($duplicated < 2) {
                    $nums[$writeIndex] = $nums[$index];
                    ++$writeIndex;
                } else {
                    // nothing                   
                }
            } else {
                $nums[$writeIndex] = $nums[$index];
                ++$writeIndex;
                $duplicated = 0;
            }
        }

        return $writeIndex;
    }
}