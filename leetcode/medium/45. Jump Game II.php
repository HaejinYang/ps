<?php
class Solution {
    // https://leetcode.com/problems/jump-game-ii/?envType=study-plan-v2&envId=top-interview-150
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function jump($nums) {
        // 첫 번째 인덱스에서 시작
        // 각 원소의 값은 점프할 수 있는 최대 숫자
        // 마지막 인덱스에 도달할 수 있는 최소 숫자?
        // 도달하지 못하는 경우는 없다?

        $length = count($nums);
        if($length === 1) {
            return 0;
        }
        
        $distance = array_fill(0, $length, 0);
        for($i = 0; $i < $length; $i++) {
            $prev = $distance[$i];
            for($j = $i + 1; ($j < $length) && ($j <= $i + $nums[$i]); $j++) {
                if($distance[$j] === 0) {
                    $distance[$j] = $prev + 1;
                }
            }
        }

        return $distance[$length - 1];
    }
}

// 아 예전에 ts 풀이가 훨씬 더 깔끔하다.... 이럴수가...