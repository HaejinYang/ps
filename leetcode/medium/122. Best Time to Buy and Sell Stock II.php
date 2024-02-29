<?php
class Solution {
    // https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/?envType=study-plan-v2&envId=top-interview-150
    // 첫 번째 풀이 time O(N), space O(1) 21ms(22.42%)
    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {
        // 사팔사팔 하라는거구나
        $length = count($prices);
        $maxProfit = 0;
        for($i = 1; $i < $length; $i++) {
            if($prices[$i] > $prices[$i - 1]) {
                $maxProfit += $prices[$i] - $prices[$i - 1];
            }
        }

        return $maxProfit;
    }
}

// 첫 번째 풀이에서 개선할 점.... 오름차순이라면 매번 계산을 다시할 필요는 없다.