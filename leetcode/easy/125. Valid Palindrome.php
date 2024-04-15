<?php
// https://leetcode.com/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150
class Solution {

    /**
     * @param String $s
     * @return Boolean
     */
    function isPalindrome($s) 
    {
        $s = strtolower($s);
        $lhsIndex = 0;
        $rhsIndex = strlen($s);

        while($lhsIndex < $rhsIndex) {
            $lhs = $s[$lhsIndex];
            $rhs = $s[$rhsIndex];
            if(!$this->isAlphaNumeric($lhs)) {
                ++$lhsIndex;
                
                continue;
            }

            if(!$this->isAlphaNumeric($rhs)) {
                --$rhsIndex;
                
                continue;
            }

            if($lhs !== $rhs) {
                return false;
            }

            ++$lhsIndex;
            --$rhsIndex;
        }

        return true;
    }

    private function isAlphaNumeric($ch) 
    {
        $target = ord($ch);
        
        if(($target >= ord('a') && $target <= ord('z')) || 
            ($target >= ord('A') && $target <= ord('Z')) ||
            ($target >= ord('0') && $target <= ord('9'))
        ) {
            return true;
        }
        
        return false;
    }
}