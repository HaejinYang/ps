<?php
// https://leetcode.com/problems/rotate-array/?envType=study-plan-v2&envId=top-interview-150
// 첫 번째 풀이 time: o(nlogn) space: o(n) 68ms
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return NULL
     */
    function rotate(&$nums, $k) {
        $length = count($nums);
        $rotateCount = $k % $length;
        if($rotateCount === 0) {
            return;
        }

        // O(1),
        // (m + k)
        // m+k >= N (N - M + K) 이건가
        $result = [];
        $start = 0;
        $count = 0;
        while($count < $length) {
            $rotateIndex = $start + $rotateCount;
            if($rotateIndex >= $length) {
                $rotateIndex = ($start + $rotateCount) % $length;
            } 

            $result[$rotateIndex] = $nums[$start];
            
            ++$start;
            ++$count;
        }

        ksort($result);
        $nums = $result;
    }
}

/**
 * 첫 번째 풀이의 안좋은 점...  $result[$rotateIndex] = $nums[$start]; 코드를 통해서 자연스럽게 첫 번째 인덱스도 채워질것이라 생각했지만 그렇지 않았다.
 * index array지만, ordered map인 php array의 기본을 잊었다. 그래서 ksort로 다시 정렬을 시켜는데, 이러지 말고 array_fill(시작인덱스, 갯수, 값)을 이용하여
 * 값이 채워진 array를 만드는게 낫다.
 * time: o(n), space: o(n) 61ms
 */
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return NULL
     */
    function rotate(&$nums, $k) {
        $length = count($nums);
        $rotateCount = $k % $length;
        if($rotateCount === 0) {
            return;
        }

        // O(1),
        // (m + k)
        // m+k >= N (N - M + K) 이건가
        $result = array_fill(0, $length, 0);
        $start = 0;
        $count = 0;
        while($count < $length) {
            $rotateIndex = $start + $rotateCount;
            if($rotateIndex >= $length) {
                $rotateIndex = ($start + $rotateCount) % $length;
            } 
            // 위 4줄의 코드는 한줄로 바꿀 수 있다. 바꾸면 57ms, time, space 그대로

            $result[$rotateIndex] = $nums[$start];
            
            ++$start;
            ++$count;
        }

        $nums = $result;
    }
}

/**
 * inplace time O(N), space O(1)까지 가능해보이는데, 중복된 인덱스를 처리할지 모르겟다
 * [1,2,3,4] 이고 k가 2라면, 0 -> 2 -> 0 -> 2 무한반복;
 */