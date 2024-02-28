<?php
// https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
// 첫 번째 솔루션 time: O(N), space: O(N)
class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function majorityElement($nums) {
        // 올림
        // time: O(N), space: O(1)
        // 어떤 것을 기억해야하지?

        // easy solution 배열 2개 쓰면되겠지
        $result = [];
        $size = count($nums);
        for($i = 0; $i < $size; $i++) {
            if(!isset($result[$nums[$i]])) {
                $result[$nums[$i]] = 1;
            } else {
                $result[$nums[$i]]++;
            }
        }

        $target = 0;
        $max = PHP_INT_MIN;
        foreach($result as $key => $val) {
            if($val > $max) {
                $max = $val;
                $target = $key;
            }
        }

        return $target;
    }
}

// 두 번째 솔루션 time: O(N), space: O(1)
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function majorityElement($nums) {
        // 올림
        // time: O(N), space: O(1)
        // 어떤 것을 기억해야하지?
        // 조건에 의하면, mjaority element가 반드시 있다?

        $target = $nums[0];
        $size = count($nums);
        $majorityCount = 0;
        for($index = 0; $index < $size; $index++) {
            if($target === $nums[$index]) {
                $majorityCount++;
            } else {
                $majorityCount--;
                if($majorityCount <= 0) {
                    // 이전거는 버려도 된다
                    $target = $nums[$index];
                    $majorityCount = 1;
                }
            }
        }

        return $target;
    }
}

// 세 번째 솔루션
// solution 참고. PHP built in function을 이용한것
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function majorityElement($nums) {
        // $nums 배열에 있는 value의 카운트를 센것
        // 리턴 값은 $nusm의 value과 키로 들어가고, 그 갯수가 값으로 들언간다.
        $valueCount = array_count_values($nums);
        
        // array_keys에 두 번째 인자로 filter 값을 줄 수 있다.
        return array_keys($valueCount, max($valueCount))[0];
    }
}