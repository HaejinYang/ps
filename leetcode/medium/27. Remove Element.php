<?php
// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
// 첫번째 풀이. 맞았지만, PHP스럽지 않음
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {
        $replace = count($nums) - 1;
        $changeCount = 0;
        while(true) {
            $ret = array_search($val, $nums);
            if($ret === false) {
                // 찾음
                break;
            }

            $temp = $nums[$replace];
            $nums[$replace] = '_';
            if($replace !== $ret) {
                $nums[$ret] = $temp;
            }
            --$replace;
            ++$changeCount;
        }

        return count($nums)- $changeCount;
    }
}

// 두번째 풀이. unset을 사용했다.
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $val
     * @return Integer
     */
    function removeElement(&$nums, $val) {
        while(true) {
            $ret = array_search($val, $nums);
            if($ret === false) {
                // 찾음
                break;
            }

            unset($nums[$ret]);
        }

        return count($nums);
    }
}