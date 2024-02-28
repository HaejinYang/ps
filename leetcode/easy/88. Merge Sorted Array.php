<?php
// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer $m
     * @param Integer[] $nums2
     * @param Integer $n
     * @return NULL
     */
    function merge(&$nums1, $m, $nums2, $n) 
    {
        $size = $m + $n;
        $result = [];
        $lhsIndex = 0;
        $rhsIndex = 0;

        for($i = 0; $i < $size; $i++) {
            $lhs = $nums1[$lhsIndex];
            $rhs = $nums2[$rhsIndex];

            if($lhsIndex === $m) {
                $result[] = $rhs;
                $rhsIndex++;

                continue;
            }

            if($rhsIndex === $n) {
                $result[] = $lhs;
                $lhsIndex++;

                continue;
            }

            if($lhs < $rhs) {
                $result[] = $lhs;
                $lhsIndex++;
            } else {
                $result[] = $rhs;
                $rhsIndex++;
            }
        }

        $nums1 = $result;   
    }
}