<?php
class Solution {
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {
        // easy solution, time O(n^2), space O(1) : time limit exceeded
        // $size = count($prices);
        // $max = 0;
        // for($i = 0; $i < $size; $i++) {
        //     for($j = $i + 1; $j < $size; $j++) {
        //         $profit = $prices[$j] - $prices[$i];
        //         if($profit > $max) {
        //             $max = $profit;
        //         }
        //     }
        // }

        // return max($max, 0);

        // time O(N), space O(1);
        $length = count($prices);
        $min = $prices[0];
        $max = 0;
        for($i = 0; $i < $length; $i++) {
            if($min > $prices[$i]) {
                $min = $prices[$i];
            } else {
                $profit = $prices[$i] - $min;
                if($profit > $max) {
                    $max = $profit;
                }
            }
        }

        return max($max, 0);
    }
}