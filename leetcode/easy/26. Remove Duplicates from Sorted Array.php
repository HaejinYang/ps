<?php
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// 첫 번째 풀이:  21ms
class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        $nums = array_unique($nums);

        return count($nums);
    }
}

// 두 번째 풀이: 33ms
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        if(count($nums) === 1) {
            return 1;
        }

        $size = count($nums);
        for($i = 1; $i < $size; $i++) {
            if($nums[$i] === $nums[$i-1]) {
                unset($nums[$i-1]);
            }
        }

        return count($nums);
    }
}

// 처음과 두번 모두 너무 느리다. 그래서 다른 사람의 풀이를 살펴보니 이런 풀이가 있더라.
class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        $count = count($nums);
        $writeIndex = 1;
        
        for ($i = 1; $i < $count; $i++) {
            if ($nums[$i] !== $nums[$i - 1]) {
                $nums[$writeIndex] = $nums[$i];
                $writeIndex++;
            }            
        }
        
        return $writeIndex;
    }
}

// 예를 들어 0 1 2 2 2 3 4 라고 있다면
0 1 2 2 2 3 4
  i i i i i i 
  w w w w
0 1 2 3 4